// Integración con Google Classroom usando Google Identity Services.
(function () {
  const GOOGLE_CLIENT_ID = "TU_CLIENT_ID_AQUI.apps.googleusercontent.com";
  const GOOGLE_SCOPE =
    "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.rosters.readonly";
  const STORAGE_KEY = "agenda-docente-google-auth";

  let tokenClient = null;

  function readStoredAuth() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveStoredAuth(payload) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function clearStoredAuth() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function isStoredTokenExpired(storedAuth) {
    if (!storedAuth?.expiresAt) {
      return true;
    }

    return Date.now() >= storedAuth.expiresAt;
  }

  async function fetchGoogleCourses(accessToken) {
    const response = await fetch("https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.status === 401 || response.status === 403) {
      const error = new Error("TOKEN_EXPIRED");
      error.code = "TOKEN_EXPIRED";
      throw error;
    }

    if (!response.ok) {
      throw new Error("API_ERROR");
    }

    const data = await response.json();
    return data.courses || [];
  }

  async function syncCoursesWithGoogle(accessToken) {
    try {
      const courses = await fetchGoogleCourses(accessToken);
      window.AgendaDocenteApp.useGoogleCourses(courses);
      window.AgendaDocenteApp.setGoogleBannerMode("connected");
      window.AgendaDocenteApp.showStatusMessage(
        "Cuenta conectada correctamente. Se cargaron los cursos activos de Google Classroom.",
        "success"
      );
    } catch (error) {
      if (error.code === "TOKEN_EXPIRED" || error.message === "TOKEN_EXPIRED") {
        clearStoredAuth();
        window.AgendaDocenteApp.useMockCourses();
        window.AgendaDocenteApp.setGoogleBannerMode("expired");
        window.AgendaDocenteApp.showStatusMessage(
          "La sesión con Google expiró. Volvé a conectar tu cuenta para actualizar los cursos.",
          "error"
        );
        return;
      }

      window.AgendaDocenteApp.useMockCourses();
      window.AgendaDocenteApp.setGoogleBannerMode("expired");
      window.AgendaDocenteApp.showStatusMessage(
        "No se pudieron cargar los cursos de Google Classroom. Se mantienen los cursos de ejemplo.",
        "error"
      );
    }
  }

  function handleTokenResponse(response) {
    if (!response?.access_token) {
      window.AgendaDocenteApp.showStatusMessage(
        "No se obtuvo un token válido desde Google. Revisá el Client ID configurado.",
        "error"
      );
      return;
    }

    const expiresAt = Date.now() + (response.expires_in || 3600) * 1000;

    saveStoredAuth({
      accessToken: response.access_token,
      expiresAt
    });

    syncCoursesWithGoogle(response.access_token);
  }

  function requestGoogleAccess() {
    if (GOOGLE_CLIENT_ID === "TU_CLIENT_ID_AQUI.apps.googleusercontent.com") {
      window.AgendaDocenteApp.showStatusMessage(
        "Primero reemplazá el placeholder TU_CLIENT_ID_AQUI.apps.googleusercontent.com por tu Client ID de Google Cloud.",
        "error"
      );
      return;
    }

    if (!window.google?.accounts?.oauth2) {
      window.AgendaDocenteApp.showStatusMessage(
        "La librería de Google Identity Services no se cargó correctamente.",
        "error"
      );
      return;
    }

    if (!tokenClient) {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: GOOGLE_SCOPE,
        callback: handleTokenResponse
      });
    }

    tokenClient.requestAccessToken({ prompt: "consent" });
  }

  function attachListeners() {
    document.getElementById("connect-google-button")?.addEventListener("click", requestGoogleAccess);
    document.getElementById("reconnect-google-button")?.addEventListener("click", requestGoogleAccess);
    document.getElementById("sidebar-connect-google")?.addEventListener("click", requestGoogleAccess);
  }

  function restoreSessionIfPossible() {
    const storedAuth = readStoredAuth();

    if (!storedAuth) {
      window.AgendaDocenteApp.setGoogleBannerMode("disconnected");
      return;
    }

    if (isStoredTokenExpired(storedAuth)) {
      clearStoredAuth();
      window.AgendaDocenteApp.setGoogleBannerMode("expired");
      window.AgendaDocenteApp.showStatusMessage(
        "La sesión guardada de Google expiró. Reconectá tu cuenta para volver a sincronizar cursos.",
        "error"
      );
      return;
    }

    syncCoursesWithGoogle(storedAuth.accessToken);
  }

  attachListeners();
  restoreSessionIfPossible();
})();

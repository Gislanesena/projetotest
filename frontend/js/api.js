/* Cliente HTTP do backend Java WoHackers */
(function (global) {
  const API_BASE = global.WOHACKERS_API_BASE || `${location.origin}/api`;
  const TOKEN_KEY = 'wohackers_token';

  function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  function setToken(token) {
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  }

  async function request(path, options = {}) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${API_BASE}${path}`, Object.assign({}, options, { headers }));
    const text = await res.text();
    let data = null;
    if (text) {
      try { data = JSON.parse(text); } catch { data = { message: text }; }
    }
    if (!res.ok) {
      const err = new Error((data && data.message) || `Erro HTTP ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  const Api = {
    getToken,
    setToken,
    clearToken() { setToken(null); },
    health() { return request('/health'); },
    login(username, password) {
      return request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
    },
    identify(nome, pin) {
      return request('/auth/identify', {
        method: 'POST',
        body: JSON.stringify({ nome, pin }),
      });
    },
    logout() {
      return request('/auth/logout', { method: 'POST' }).catch(() => null);
    },
    me() { return request('/auth/me'); },
    getStore() { return request('/store'); },
    putStore(snapshot) {
      return request('/store', {
        method: 'PUT',
        body: JSON.stringify(snapshot),
      });
    },
  };

  global.Api = Api;
})(window);

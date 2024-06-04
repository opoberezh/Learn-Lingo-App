let token = null;

export const setAuthHeader = (newToken) => {
  token = newToken;
};

export const authenticatedFetch = async (url, options = {}) => {
  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    };
  }
  const response = await fetch(url, options);
  return response.json();
};

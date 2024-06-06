let token = null;

export const setAuthHeader = (newToken) => {
  token = newToken;
  if (newToken) {
    localStorage.setItem('authToken', newToken); // Збереження токену у localStorage
  } else {
    localStorage.removeItem('authToken');
  }
};

export const authenticatedFetch = async (url, options = {}) => {
  const authToken = token || localStorage.getItem('authToken');
  if (authToken) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${authToken}`,
    };
  }
  const response = await fetch(url, options);
  return response.json();
};

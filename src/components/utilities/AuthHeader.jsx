let token = null;

export const setAuthHeader = (newToken) => {
  token = newToken;
  if (newToken) {
    localStorage.setItem('authToken', newToken); 
  } else {
    localStorage.removeItem('authToken');
  }
};

export const saveUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};


export const getUserData = () => {
  const userData = localStorage.getItem('user');
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
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
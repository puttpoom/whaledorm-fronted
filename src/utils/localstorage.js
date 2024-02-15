const ACCESS_TOKEN = "accessToken";

export const storeToken = (token) => localStorage.setItem(ACCESS_TOKEN, token); //* for login
export const getToken = () => localStorage.getItem(ACCESS_TOKEN); //* for authenticate when link to
export const clearToken = () => localStorage.removeItem(ACCESS_TOKEN); //* for logout

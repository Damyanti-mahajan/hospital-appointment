// export const saveToken = (token) => localStorage.setItem('token', token);
// export const getToken = () => localStorage.getItem('token');
// export const removeToken = () => localStorage.removeItem('token');

const saveToken = (token) => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const removeToken = () => localStorage.removeItem('token');

export { saveToken, getToken, removeToken };


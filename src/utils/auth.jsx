// utils/auth.js

// Simulación de login con promesa para permitir await (aunque sea local)
export const login = async (email, password) => {
  return email === 'admin@jcavalier.com' && password === 'jcavalier2025';
};

// Verifica si hay sesión activa
export const isAuthenticated = () => {
  return localStorage.getItem('jcavalier_admin') === 'true';
};

// Establece sesión
export const setSession = () => {
  localStorage.setItem('jcavalier_admin', 'true');
};

// Cierra sesión
export const logout = () => {
  localStorage.removeItem('jcavalier_admin');
};

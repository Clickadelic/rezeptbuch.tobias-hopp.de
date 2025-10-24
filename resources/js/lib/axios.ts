import axios from 'axios';

// axios.defaults.withCredentials = true; // unbedingt für Sanctum
// axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export async function csrf() {
  // CSRF-Cookie einmal holen
  await axios.get('/sanctum/csrf-cookie');
}

export default axios;
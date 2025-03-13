import axios from 'axios'

// Contoh global config (opsional):
axios.defaults.baseURL = 'http://localhost:8080/api' 

// Jika butuh session cookie untuk login session-based:
axios.defaults.withCredentials = false

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
  })
  
export default api
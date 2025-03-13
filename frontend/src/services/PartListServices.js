import axios from '@/plugins/axios'

export default {
  async getAll() {
    return axios.get('/partlists')
  },
  async getOne(id) {
    return axios.get(`/partlists/${id}`)
  },
  async create(data) {
    return axios.post('/partlists', data)
  },
  // dsb...
}

import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://test.gidlar.uz/api/site/',
  baseURL: 'https://culturevolunteers.uz/api/site',
  timeout: 60000,
})
axiosInstance.interceptors.response.use(
  function (response) {
    return response || {}
  },
  async function (error) {
    const statusCode = (error.response || {}).status || -1
    if (statusCode == 401 || statusCode == 403 || statusCode == -1) {
      localStorage.removeItem('code')
      localStorage.removeItem('user_id')
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
export default axiosInstance

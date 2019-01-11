import axios from 'axios'

export default (subRoute) => axios.create({
  baseURL: `/api/${subRoute}`
})

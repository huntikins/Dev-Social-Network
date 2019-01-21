import axios from 'axios'

function createApiCall(subRoute) {
  const api = axios.create({
    baseURL: `/api/${subRoute}`
  });
  return api;
}

const authApi = createApiCall('auth');
const eventsApi = createApiCall('events');
const postsApi = createApiCall('posts');
const userApi = createApiCall('user');

export default {
  auth: {
    createAccount: (newUser) => authApi.post('/create', newUser),
    login: (email, password) => authApi.post('/login', { email, password }),
    logout: () => authApi.post('/logout'),
    test: () => authApi.get('/test'),
    forgotPassword: email => authApi.post('/forgotpassword', { email })
  },
  events: {
    getEventsList: () => eventsApi.get('/')
  },
  posts: {
    getSocialFeed: () => postsApi.get('/following')
  },
  user: {
    getBasic: () => userApi.get('/'),
    getPopulated: () => userApi.get('/populated')
  }
}
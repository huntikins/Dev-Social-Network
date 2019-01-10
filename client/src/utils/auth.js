import createApi from './createApi';

const api = createApi('auth');

export default {
  createAccount: newUser => api.post('/create', newUser),
  login: (email, password) => api.post('/login', { email, password }),
  logout: () => api.post('/logout'),
  test: () => api.get('/test')
}
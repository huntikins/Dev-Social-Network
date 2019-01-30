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
const socialApi = createApiCall('social');
const kbApi = createApiCall('kb');

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
    getSocialFeed: () => postsApi.get('/following'),
    createPost: newPost => postsApi.post('/', newPost),
    addComment: newComment => postsApi.post('/comment', newComment),
    deleteComment: (commentId, postId) => postsApi.delete('/comment', { data: { commentId, postId } }),
    like: postId => postsApi.post(`/like/${postId}`),
    unlike: postId => postsApi.post(`/unlike/${postId}`),
    deletePost: postId => postsApi.delete(`/${postId}`)
  },
  currentUser: {
    getBasic: () => userApi.get('/'),
    getPopulated: () => userApi.get('/populated'),
    getPosts: () => userApi.get('/posts'),
    updateInfo: updatedInfo => userApi.put('/', updatedInfo),
    getImage: () => userApi.get('/image'),
    deleteAccount: password => userApi.delete('/', { data: { password } }),
    getKBItems: () => userApi.get('/kbItems')
  },
  otherUser: {
    getBasic: userId => userApi.get(`/${userId}`),
    getPopulated: userId => userApi.get(`/populated/${userId}`),
    getPosts: userId => userApi.get(`/posts/${userId}`),
    getImage: userId => userApi.get(`/image/${userId}`),
    searchUsers: query => userApi.get(`/search/${query}`),
    getKBItems: userId => userApi.get(`/kbItems/${userId}`)
  },
  social: {
    follow: userId => socialApi.post(`/follow/${userId}`),
    unfollow: userId => socialApi.post(`/unfollow/${userId}`)
  },
  knowledgeBase: {
    add: newKBItem => kbApi.post('/', newKBItem)
  }
}
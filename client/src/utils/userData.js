import axios from "axios";

export default {
    getUserData: () => {
        return axios.get('/api/user');
    },
    putDemo: (demoObj) => {
        return axios.put('/', demoObj);
    },
    putInterests: (interestArr) => {
        return axios.put('/', interestArr);
    },
    putBio: (bio) => {
        return axios.put('/', bio);
    },
    putImage: (image) => {
        return axios.post('/api/user/s3upload', image);
    }
}
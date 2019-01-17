import axios from "axios";

export default {
    getUserData: () => {
        return axios.get('/api/user');
    },
    putDemo: (id, demoObj) => {
        return axios.put('');
    },
    putInterests: (id, interestArr) => {
        return axios.put('');
    },
    putBio: (id, bio) => {
        return axios.put('');
    }
}
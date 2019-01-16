import axios from "axios";

export default {
    getUserData: () => {
        return axios.get('/api/user');
    }
}
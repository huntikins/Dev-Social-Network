import axios from 'axios'
const dotenv = require('dotenv');
require('dotenv').config({path: '././.env'});

const API_KEY = process.env.meetUpKey

export default {
    listEvents(){
        axios.get(`https://api.meetup.com/find/upcoming_events?photo-host=public&topic_category=292&page=20&key=${API_KEY}`)
    }    
}


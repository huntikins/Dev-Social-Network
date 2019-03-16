<template>
    <div class="list-feed">
        <div class="event-item" v-for="event in events" :key="event.id">
            <h3 class="title-wrapper">
                <i class="meetup-icon fab fa-meetup"></i> 
                <span class="event-title">{{ event.name }}</span>
            </h3>
            <div class="event-info">
                <h6 class="event-date"><i class="event-icon fas fa-calendar-alt"></i>{{ event.local_date + ' ' + event.local_time | formatDate }}</h6>
                <h6 class="event-date"><i class="event-icon fas fa-external-link-alt"></i><a class="event-link" :href="event.link" target="_blank"> More info</a></h6>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import api from '../../../utils/api.js';
export default {
    data(){
        return {
            events: []
        }
    },
    filters: {
        formatDate(value){
            return moment(value, "YYYY-MM-DD HH:mm").format("LLLL");
        },
        caps(value){
            return value.toUpperCase();
        }
    },
    beforeCreate() {
        let self = this;
        api.events.getEventsList().then(res => self.events = res.data);
    }
}
</script>

<style>
.list-feed {
    background-color: rgba(61,192,236, 0);
    padding: 0px 0px 50px 10px;
    border-radius: 25px 0 0 25px;
    height: 100%;
    padding-bottom: 30vh;
}
.event-item {
    margin: 10px;
    padding: 10px 0 10px 10px;
    border-radius: 25px 0 0 25px;
    border: 3px solid rgb(61,192,236);
    background-color: rgba(61,192,236, 0.6);
    -webkit-box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
}
.event-date {
    clear: both;
    text-align: left;
    font-family: roboto, sans-serif;
    margin-right: 10px;
    font-size: .75em;
    color: white;
    margin-top: 10px;
}
.event-link {
    text-align: left;
    font-family: roboto, sans-serif;
    margin-right: 10px;
    color: white;
    margin-top: 10px;
    text-decoration: none;
}
.event-link:hover{
    color: rgb(61,192,236);
}
.title-wrapper {
    padding-left: 5px;
}
.event-title {
    vertical-align: top;
    color:  white;
    font-family: alternate-gothic-no-1-d, sans-serif;
    font-size: 1.25em;
}
.event-icon {
    color: white;
    font-size: 1em;
    padding-right: 4px;
}
.meetup-icon {
    color:  white;;
    font-size: 3em;
    float: left;
    padding: 0 10px 10px 0;
}
.event-info {
    clear: both;
    padding: 5px 0 5px 15px;
    background-color: rgba(133,149,149, 0.7);
    border-radius: 25px 0 0 25px;
    border: 2px solid rgb(61,192,236);
    border-right: none;
}
/* Laptops, Desktops */
/* @media (min-width: 1025px) and (max-width: 1600px) { */
    .meetup-icon {
        font-size: 2em;
    }
    .event-title{
        font-size: 1em;
    }
    .event-date {
        font-size: .70em;
    }
/* } */
</style>

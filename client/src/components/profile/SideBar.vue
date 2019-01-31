<template>
    <div class="profile-info">
        <div class="profile-header">
            <div class="user-name">
                <h1 class="name-first">{{ firstName | firstCap }}</h1>
                <h1 class="name-last">{{ lastName | firstCap }}</h1>
            </div>
            <div class="user-stat">
                <span class="stat-item"><i class="stat-icon fas fa-map-marker-alt"></i> {{ location.city || location.state ? `${location.city}, ${location.state}` : zipCode }}</span>
                <span class="stat-item" v-if="jobTitle || jobCompany">
                    <i class="stat-icon fas fa-building"></i> {{ jobTitle || "Works" }}{{ jobCompany ? ` at ${jobCompany}` : '' }}
                </span>
                <div class="stat-item-group">
                    <span class="stat-item-group">
                        <i class="stat-icon-group fas fa-users"></i> {{ friend_count }} 
                    </span>
                    <span class="stat-item-group">
                        <i class="stat-icon-group far fa-eye"></i> {{ following_count }} 
                    </span>
                    <span class="stat-item-group">
                        <i class="stat-icon-group fas fa-eye"></i> {{ follower_count }} 
                    </span>
                </div>
            </div>
        </div>
        <div class="profile-footer">
            <div class="user-interest">
                <h4 class="interest-title">Interests</h4>
                <ul class="interest-list">
                    <li class="interest-list-item" v-for="interest in interests" :key="interest">{{ interest }}</li>
                </ul>
            </div>
            <div class="user-bio">
                <p class="bio-text">{{ bio }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import zipcodes from 'zipcodes';
import api from '../../utils/api.js';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            jobTitle: '',
            jobCompany: '',
            zipCode: '',
            location: {},
            interests: [],
            followers: [],
            following: [],
            bio: ""
        }
    },
    beforeCreate() {
        const self = this;
        api.currentUser.getBasic().then(res => {
            console.log(res)
            const user = res.data;
            self.firstName = user.firstName;
            self.lastName = user.lastName;
            self.jobTitle = user.jobTitle || '';
            self.jobCompany = user.jobCompany || '';
            self.zipCode = user.zipCode;
            self.location = zipcodes.lookup(parseInt(user.zipCode)) || {};
            self.interests = user.interests || [];
            self.followers = user.followers || [];
            self.following = user.following || [];
            self.bio = user.bio || '';
        });
    },
    computed: {
        friend_count: function() {
            let count = 0;
            const self = this;
            self.followers.forEach(user => {
                if (self.following.indexOf(user) > -1) count++;
            });
            return count;
        },
        follower_count: function() { return this.followers.length },
        following_count: function() { return this.following.length }
    },
    filters: {
        firstCap(value){
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>
.profile-info {
    height: 87vh;
    width: 14%;
    background-color: #f39121; 
    position: fixed;
}
.user-name{
    margin-top: 15px;
    margin-left: 10px;
}
.name-first{
    font-family: alternate-gothic-no-1-d, sans-serif;
    font-size: 4em;
    padding: 0;
    margin: 0;
    line-height: .75;
}
.name-last {
    font-family: alternate-gothic-no-1-d, sans-serif;
    font-size: 5em;
    padding: 0;
    margin: 0;
    line-height: 1;
}
.user-stat{
    margin:10px;
}
.stat-item{
    font-family: roboto, sans-serif;
    display: block;
    margin-left: 10px;
    font-size: .85em;
    color: #859595;
}
.stat-item-group{
    text-align: center;
    font-family: roboto, sans-serif;
    margin-right: 10px;
    font-size: 1em;
    color: #859595;
    margin-top: 10px;
}
.stat-icon{
    color: #3dc0ec;
}
.stat-icon-group{
    color: #3dc0ec;
    font-size: 1em;
}
.profile-header{
    border-bottom-right-radius: 25px;
    background-color: white;
    padding: 10px;
}
.profile-footer {
    margin-top: 10px;
    border-radius: 0 25px 25px 0;
    background-color: white;
    padding: 0 10px 10px 0;
}
.user-interest {
    padding-top: 10px;
}
.interest-title{
    font-family: alternate-gothic-no-1-d, sans-serif;
    text-align:center;
    font-size: 2em;
}
.interest-list {
    list-style-type: none;
    padding-left: 15%;
    overflow-y: scroll;
    height: 11vh;
}
.interest-list::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.interest-list-item{
    text-align: center;
    font-family: roboto, sans-serif;
    color: white;
    background-color: #3dc0ec;
    border: 1px solid #3dc0ec;
    padding: 2px;
    border-radius: 100px;
    margin: 4px;
    width: 75%;
}
.user-bio{
    height: 40vh;
    padding: 4px 4px 4px 10px;
    background-color: #859595;
    border-radius: 0 25px 25px 0;
    overflow-y: scroll;
}
.user-bio::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.bio-text{
    font-family: roboto, sans-serif;
    color: white;
    padding: 4px;
}
/* higher resolution laptops */
@media (min-width: 1025px) and (max-width: 1600px)  {
    .profile-info {
        height: 87vh;
        background-color: #f39121; 
    }
    .bio-text {
        font-size: .75em;
    }
    .interest-list-item{
        font-size: .75em;
    }
    .user-name{
        margin-top: 15px;
        margin-left: 10px;
    }
    .name-first{
        font-family: alternate-gothic-no-1-d, sans-serif;
        font-size: 3em;
        padding: 0;
        margin: 0;
        line-height: .75;
    }
    .stat-item-group{
        font-size: .85em; 
    }
    .stat-item {
        font-size: .70em;
    }
    .name-last {
        font-family: alternate-gothic-no-1-d, sans-serif;
        font-size: 3em;
        padding: 0;
        margin: 0;
        line-height: 1;
    }
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {

}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (min-width: 481px) and (max-width: 767px) {

}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 319px) and (max-width: 480px) {

}
/*galaxy s5*/
@media (width: 360px) {

}
/*pixel 2*/
@media (width: 411px) {

}
/*iphone 5SE*/
@media (width: 320px) {
 
}
/*iphone 6/7/8*/
@media (width: 375px) {

}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {

}
/*iphone X*/
@media (width: 375px) {

}
/*iPad pro*/
@media (width: 1024px) {

}
</style>

<template>
    <div class="profile-info">
        <div class="profile-header">
            <div class="user-name">
                <h1 class="name-first">{{ firstName }}</h1>
                <h1 class="name-last">{{ lastName }}</h1>
            </div>
            <div class="user-stat">
                <span class="stat-item"><i class="stat-icon fas fa-map-marker-alt"></i> {{ location.city }}, {{ location.state }}</span>
                <span class="stat-item"><i class="stat-icon fas fa-building"></i> {{ jobTitle }} at {{ jobCompany }}</span>
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
            zipcode: '',
            location: {},
            interests: [],
            friends: [],
            followers: [],
            following: [],
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    beforeCreate() {
        const self = this;
        api.user.getBasic().then(res => {
            console.log(res)
            const user = res.data;
            self.firstName = user.firstName;
            self.lastName = user.lastName;
            self.jobTitle = user.jobTitle || '';
            self.jobCompany = user.jobCompany || '';
            self.zipCode = user.zipCode;
            self.location = zipcodes.lookup(parseInt(user.zipCode));
            self.interests = user.interests || [];
            self.friends = user.friends || [];
            self.followers = user.followers || [];
            self.following = user.following || [];
            self.bio = user.bio || '';
        });
    },
    computed: {
        friend_count: function() { return this.friends.length },
        follower_count: function() { return this.followers.length },
        following_count: function() { return this.following.length }
    }
}
</script>

<style>
.profile-info {
    height: 87vh;
    width: 14%;
    margin-top: 12vh;
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
</style>

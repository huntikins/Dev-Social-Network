<template>
    <div class="profile-info">
        <div class="profile-header">
            <div class="user-name">
                <h1 class="name-first">{{ user.first_name }}</h1>
                <h1 class="name-last">{{ user.last_name }}</h1>
            </div>
            <div class="user-stat">
                <span class="stat-item"><i class="stat-icon fas fa-map-marker-alt"></i> {{ user.location.city }}, {{ user.location.state }}</span>
                <span class="stat-item"><i class="stat-icon fas fa-building"></i> {{ user.job_title }} at {{ user.job_company }}</span>
                <div class="stat-item-group">
                    <span class="stat-item-group">
                        <i class="stat-icon-group fas fa-users"></i> {{ user.friend_count }} 
                    </span>
                    <span class="stat-item-group">
                        <i class="stat-icon-group far fa-eye"></i> {{ user.following_count }} 
                    </span>
                    <span class="stat-item-group">
                        <i class="stat-icon-group fas fa-eye"></i> {{ user.follower_count }} 
                    </span>
                </div>
            </div>
            <div class="follow-wrapper">
                <button class="btn btn-follow" v-if="followusr === false" @click.prevent="follow()"><i class="stat-icon-follow far fa-eye"></i> follow</button>
                <button class="btn btn-following" @click.prevent="unfollow()" v-else><i class="stat-icon-follow far fa-eye"></i> following</button>
            </div>
        </div>
        <div class="profile-footer">
            <div class="user-interest">
                <h4 class="interest-title">Interests</h4>
                <ul class="interest-list">
                    <li class="interest-list-item" v-for="interest in user.interests" :key="interest">{{ interest }}</li>
                </ul>
            </div>
            <div class="user-profile-bio">
                <p class="bio-text">{{ user.bio }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import zipcodes from 'zipcodes'
export default {
    data(){
        return {
            user: {
                first_name: "Hunter",
                last_name: "Trammell",
                location: zipcodes.lookup(66224),
                job_title: "Developer",
                job_company: "Chuck E. Cheese",
                interests: ["Cheese", "Robotic Singers", "Pizza","Cheese", "Robotic Singers", "Pizza"],
                friend_count: 500,
                following_count: 675,
                follower_count: 533,
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            followusr: false
        }
    },
    methods: {
        follow(){
            this.followusr = true
            console.log(this.followusr)
        },
        unfollow(){
            this.followusr = false
            console.log(this.followusr)
        }
    }
}
</script>

<style>
.btn-follow{
    background-color:#3dc0ec;
    border-radius: 100px;
    color: white;
    font-family: roboto, sans-serif;
    text-align: center;
}
.btn-follow:hover{
    text-decoration: none;
    color: white;
}
.btn-following{
    background-color:#859595;
    border-radius: 100px;
    color: white;
    font-family: roboto, sans-serif;
    text-align: center;
}
.btn-following:hover{
    text-decoration: none;
    color: white;
}
.stat-icon-follow {
    color: white;
}
.follow-wrapper {
    text-align: center;
}
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
.user-profile-bio{
    height: 35vh;
    padding: 4px 4px 4px 10px;
    background-color: #859595;
    border-radius: 0 25px 25px 0;
    overflow-y: scroll;
}
.user-profile-bio::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.bio-text{
    font-family: roboto, sans-serif;
    color: white;
    padding: 4px;
}
</style>

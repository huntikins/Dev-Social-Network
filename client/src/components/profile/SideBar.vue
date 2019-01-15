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
        </div>
        <div class="profile-footer">
            <div class="user-interest">
                <h4 class="interest-title">Interests</h4>
                <ul class="interest-list">
                    <li class="interest-list-item" v-for="interest in user.interests" :key="interest">{{ interest }}</li>
                </ul>
            </div>
            <div class="user-bio">
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
                interests: ["Cheese", "Robotic Singers", "Pizza"],
                friend_count: 500,
                following_count: 675,
                follower_count: 533,
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        }
    }
}
</script>

<style>
.profile-info {
    height: 88vh;
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
.interest-list{
    list-style-type: none;
    padding-left: 15%;
}
.interest-list-item{
    text-align: center;
    font-family: roboto, sans-serif;
    color: white;
    background-color: #3dc0ec;
    border: 1px solid #3dc0ec;
    padding: 2px;
    border-radius: 100px;
    margin: 2px;
    width: 75%;
}
.user-bio{
    padding: 4px 4px 4px 10px;
    background-color: #859595;
    border-radius: 0 25px 25px 0;
}
.bio-text{
    font-family: roboto, sans-serif;
    color: white;
    padding: 4px;
}
</style>

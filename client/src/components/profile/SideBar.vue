<template>
    <div class="profile-info">
        <div class="user-name">
            <h1>{{ user.first_name }}</h1>
            <h1>{{ user.last_name }}</h1>
            <span><i class="fas fa-map-marker-alt"></i> {{ user.location.city }}, {{ user.location.state }}</span>
            <br>
            <span><i class="fas fa-building"></i> {{ user.job_title }} at {{ user.job_company }}</span>
            <br>
            <span><i class="fas fa-users"></i> {{ user.friend_count }}</span>
            <h4>Interests</h4>
            <ul>
                <li v-for="interest in user.interests">{{ interest }}</li>
            </ul>
            <p>{{ user.bio }}</p>
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
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        }
    }
}
</script>

<style>
.profile-info {
    height: 88vh;
    width: 300px;
    background-color: white; 
    position: fixed;
    border-top: 10px solid #f39121;
}
</style>

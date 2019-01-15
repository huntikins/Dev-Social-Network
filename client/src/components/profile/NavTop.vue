<template>
    <div class="navbar navbar-light justify-content-end">
        <app-slide>
            <router-link id="" to="/social">
                <span>Social</span>
            </router-link>
            <router-link id="" to="/profile">
                <span>Profile</span>
            </router-link>
            <router-link id="" to="/account">
                <span>Account</span>
            </router-link>
            <br><br><br><br>
            <router-link id="" to="/">
                <span>Log Out</span>
            </router-link>
        </app-slide>
        <a class="navbar-brand text-right" href="#">
            <img class="nav-logo" src="@/assets/nav-logo.png" alt="cerebellum">
        </a>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    components: {
        appSlide: Slide
    }
}
</script>

<style>
.navbar {
    background-color: #859595;
    height: 12vh;
    width: 100vw;
    margin-bottom:12vh;
    position: fixed;
    z-index: 4;
}
.nav-logo {
    height: auto;
    width: 8%;
}
.bm-menu {
    background-color: #859595; 
    z-index: 10;
}
.bm-burger-bars {
    background-color: white;
}
.bm-cross {
    background: white;
}
.bm-cross-button {
    margin-right: 80%;
    margin-top: 5%;
}
</style>

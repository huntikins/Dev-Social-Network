<template>
    <div class="navbar navbar-light justify-content-end">
        <app-slide>
            <a id="" href="#">
                <span>Social</span>
            </a>
            <a id="" href="#">
                <span>Profile</span>
            </a>
            <a id="" href="#">
                <span>Account</span>
            </a>
            <br><br><br><br>
            <a id="" href="#">
                <span>Log Out</span>
            </a>
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

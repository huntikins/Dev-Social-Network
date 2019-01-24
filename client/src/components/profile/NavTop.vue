<template>
    <div class="navbar navbar-light justify-content-end">
        <app-slide width="285">
            <router-link id="" to="/social" class="menu-link">
                Social
            </router-link>
            <router-link id="" to="/profile" class="menu-link">
                Profile
            </router-link>
            <router-link id="" to="/account" class="menu-link">
                Account
            </router-link>
            <app-user-search />
            <span @click="logout" class="logout">
                Log Out
            </span>
        </app-slide>
        <a class="navbar-brand text-right" href="#">
            <img class="nav-logo" src="@/assets/nav-logo.png" alt="cerebellum">
        </a>
    </div>
</template>

<script>
import Slide from '@/components/menus/BurgerMenu';
import UserSearch from '@/components/forms/UserSearch';
import api from '../../utils/api.js';
export default {
    components: {
        appSlide: Slide,
        appUserSearch: UserSearch
    },
    methods: {
        logout() {
            api.auth.logout().then(res => this.$router.push('/'));
        }
    }
}
</script>

<style>
.navbar {
    background-color: #859595;
    height: 12vh;
    width: 100vw;
    position: fixed;
    z-index: 4;
}
.logout {
    color: white;
    font-family: roboto, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    margin: 10% 2% 2% 10%;
}
.logout:hover {
    cursor: pointer;
}
.menu-link {
    color: white;
    font-family: roboto, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    display: block;
    margin: 2% 2% 2% 10%;
}
.menu-link:hover {
    color: white;
    text-decoration: none;
}
.logout:hover {
    color: white;
    text-decoration: none;
}
.nav-logo {
    height: auto;
    width: 8%;
}
</style>

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
            <router-link id="" to="/" class="logout">
                Log Out
            </router-link>
        </app-slide>
        <a class="navbar-brand text-right" href="#">
            <img class="nav-logo" src="@/assets/nav-logo.png" alt="cerebellum">
        </a>
    </div>
</template>

<script>
import Slide from '@/components/menus/BurgerMenu'
import UserSearch from '@/components/forms/UserSearch'
export default {
    components: {
        appSlide: Slide,
        appUserSearch: UserSearch
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
/* higher resolution desktops */
@media (min-width: 1281px) and (max-width: 1380px) {
    app-slide {
        width: 20px !important;
    }
}
/* Laptops, Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
    
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
@media (min-width: 320px) and (max-width: 480px) {
    
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

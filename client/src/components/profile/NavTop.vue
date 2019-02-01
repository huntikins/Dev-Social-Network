<template>
  <div class="navbar navbar-light justify-content-end">
    <app-slide width="17">
      <router-link id to="/social" class="menu-link">Social</router-link>
      <router-link id to="/profile" class="menu-link">Profile</router-link>
      <router-link id to="/account" class="menu-link">Account</router-link>
      <app-user-search/>
      <span @click="logout" class="logout">Log Out</span>
      <a class="logout mt-4" href="https://github.com/huntertrammell/Dev-Social-Network/issues">
        <i class="fab fa-github"></i>
      </a>
    </app-slide>
    <a class="navbar-brand text-right" href="#">
      <img class="nav-logo" src="@/assets/nav-logo.png" alt="cerebellum">
    </a>
  </div>
</template>

<script>
import Slide from "@/components/menus/BurgerMenu";
import UserSearch from "@/components/forms/UserSearch";
import api from "../../utils/api.js";
export default {
  components: {
    appSlide: Slide,
    appUserSearch: UserSearch
  },
  methods: {
    logout() {
      api.auth.logout().then(res => this.$router.push("/"));
    }
  }
};
</script>

<style>
.navbar {
  background-color: #859595;
  height: 10%;
  width: 100vw;
  position: fixed;
  z-index: 4;
}
.logout {
  color: white;
  font-family: roboto, sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  position: relative;
  top: 15vh;
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
/* Laptops, Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .nav-logo {
    height: auto;
    width: 15%;
  }
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-logo {
    height: auto;
    width: 20%;
  }
}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .nav-logo {
    height: auto;
    width: 20%;
  }
}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (min-width: 481px) and (max-width: 767px) {
  .nav-logo {
    height: auto;
    width: 30%;
  }
}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 320px) and (max-width: 480px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*galaxy s5*/
@media (width: 360px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*pixel 2*/
@media (width: 411px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*iphone 5SE*/
@media (width: 320px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*iphone 6/7/8*/
@media (width: 375px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*iphone X*/
@media (width: 375px) {
  .nav-logo {
    height: auto;
    width: 35%;
  }
}
/*iPad pro*/
@media (width: 1024px) {
}
</style>

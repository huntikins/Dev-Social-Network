<template>
  <div :key="boomarangKey">
    <app-nav-top/>
    <app-user-img/>
    <app-side-bar/>
  </div>
</template>
 
<script>
import NavTop from "@/components/profile/NavTop";
import UserImage from "@/components/profile/UserImage";
import SideBar from "@/components/profile/SideBar";
import api from "../../utils/api.js";
export default {
  data() {
    return {
      boomarangKey: 0
    };
  },
  components: {
    appNavTop: NavTop,
    appUserImg: UserImage,
    appSideBar: SideBar
  }
};
</script>

<style>
</style>

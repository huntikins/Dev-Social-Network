<template>
<div>
   <app-nav-top />
   <app-user-img />
   <app-side-bar />
</div>
</template>
 
<script>
import NavTop from '@/components/profile/NavTop';
import UserImage from '@/components/profile/UserImage';
import SideBar from '@/components/profile/SideBar';
import api from '../../utils/api.js';
export default {
    components: {
        appNavTop: NavTop,
        appUserImg: UserImage,
        appSideBar: SideBar
    }
}
</script>

<style>

</style>

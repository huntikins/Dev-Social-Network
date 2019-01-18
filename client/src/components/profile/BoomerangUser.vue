<template>
<div>
   <app-nav-top />
   <app-user-img />
   <app-side-bar-user />
</div>
</template>

<script>
import NavTop from '@/components/profile/NavTop'
import UserImage from '@/components/profile/UserImage'
import SideBarUser from '@/components/profile/SideBarUser'
export default {
    components: {
        appNavTop: NavTop,
        appUserImg: UserImage,
        appSideBarUser: SideBarUser
    }
}
</script>

<style>

</style>

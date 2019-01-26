<template>
    <div>
        <app-nav-top />
        <app-user-img :user-id="userId" />
    </div>
</template>
 
<script>
import NavTop from '@/components/profile/NavTop';
import UserImage from '@/components/profile/UserImage';
import api from '../../utils/api.js';
export default {
    props: ['userId'],
    components: {
        appNavTop: NavTop,
        appUserImg: UserImage
    }
}
</script>

<style>
</style>

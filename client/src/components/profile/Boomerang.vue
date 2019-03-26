<!-- This file is no longer being used since I moved the image and it is now only the NavTop -->
<template>
    <div>
        <app-nav-top />
    </div>
</template>
 
<script>
import NavTop from '@/components/profile/NavTop';
import UserImage from '@/components/profile/UserImage';
import api from '../../utils/api.js';
export default {
    props: ['userId'],
    components: {
        appNavTop: NavTop
    }
}
</script>

<style>
</style>

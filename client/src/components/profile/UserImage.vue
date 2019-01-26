<template>
    <div>
        <img v-if="image" class="profile-image img-fluid" :src="image" alt="Profile picture">
        <img v-else class="profile-image img-fluid" src="@/assets/user-icon.png" alt="No image for user">
    </div>
</template>

<script>
import api from '../../utils/api.js';

export default {
    props: ['userId'],
    data() {
        return {
            image: undefined
        }
    },
    created() {
        api.currentUser.getImage().then(res => {
            this.image = res.data.image;
        });
    }
}
</script>

<style>
.profile-image {
    height: 175px;
    width: 175px;
    border: 10px solid #f39121;
    border-radius: 100%;
    position: fixed;
    z-index: 15;
    top: 2%;
    left: 11%;
}
</style>

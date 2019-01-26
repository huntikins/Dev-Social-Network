<template>
    <div>
        <img v-if="userId" class="img-fluid profile-image" :src="user.picture" :alt="userName">
        <img v-else class="img-fluid profile-image" src="@/assets/user-icon.png" :alt="userName">
    </div>
</template>

<script>
export default {
    props: ['userId'],
    created() {
        console.log(this.userId)
        //get profile image
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
/* higher resolution laptops */
@media (min-width: 1025px) and (max-width: 1600px)  {
    .profile-image{
      height: 125px;
      width: 125px;
      border: 5px solid #f39121;
      position: absolute;
      top: 3% !important;
    }
}

</style>

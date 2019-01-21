<template>
    <div>
        <img  class="profile-image img-fluid" src="@/assets/user-icon.png" alt="">
    </div>
</template>

<script>
export default {
    props: ['userId'],
    created() {
        console.log(this.userId)
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

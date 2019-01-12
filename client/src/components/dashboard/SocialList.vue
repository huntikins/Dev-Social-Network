<template>
    <div class="social-list">
        <app-user-post />
    </div>
</template>

<script>
import UserPost from '@/components/dashboard/UserPost'
export default {
    components: {
        appUserPost: UserPost
    }
}
</script>

<style>
.social-list {
    margin-top: 20px;
    background: white;
    height: 100%;
    border-radius: 25px 25px 0 0;
}
</style>

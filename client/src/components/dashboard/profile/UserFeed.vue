<template>
    <div class="social-feed">
        <app-new-post />
        <app-user-list />
    </div>
</template>

<script>
import NewPost from '@/components/dashboard/NewPost'
import UserList from '@/components/dashboard/profile/UserList'
export default {
    components: {
        appNewPost: NewPost,
        appUserList: UserList
    }
}
</script>

<style>
.social-feed {
    overflow: hidden;
}
</style>

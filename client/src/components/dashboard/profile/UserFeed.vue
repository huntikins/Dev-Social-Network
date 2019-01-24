<template>
    <div class="social-feed">
        <app-new-post />
        <app-user-list :user-id="userId" />
    </div>
</template>

<script>
import NewPost from '@/components/forms/NewPost'
import UserList from '@/components/dashboard/profile/UserList'
export default {
    props: ['userId'],
    components: {
        appNewPost: NewPost,
        appUserList: UserList
    }
}
</script>

<style>
.social-feed {
    height: 100%;
}
</style>

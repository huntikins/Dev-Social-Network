<template>
    <div class="social-feed">
        <app-new-post />
        <app-social-list />
    </div>
</template>

<script>
import NewPost from '@/components/dashboard/NewPost'
import SocialList from '@/components/dashboard/SocialList'
export default {
    components: {
        appNewPost: NewPost,
        appSocialList: SocialList
    }
}
</script>

<style>
.social-feed {
    overflow: hidden;
}
</style>

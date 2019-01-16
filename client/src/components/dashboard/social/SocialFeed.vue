<template>
    <div class="social-feed">
        <app-new-post />
        <app-social-list />
    </div>
</template>

<script>
import NewPost from '@/components/forms/NewPost'
import SocialList from '@/components/dashboard/social/SocialList'
export default {
    components: {
        appNewPost: NewPost,
        appSocialList: SocialList
    }
}
</script>

<style>
.social-feed {
    height: 100%;
}
</style>

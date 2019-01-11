<template>
    <div class="social-feed">
        <app-new-post />
        <!--v-for list-->
    </div>
</template>

<script>
import NewPost from '@/components/dashboard/NewPost'
export default {
    components: {
        appNewPost: NewPost
    }
}
</script>

<style>

</style>

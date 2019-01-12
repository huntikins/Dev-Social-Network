<template>
    <div>
        <p class="kb-post">{{ post }}</p>
        <div class="kb-comments" v-for="(comment, index) in comments" :key="index">
            <span class="kb-comment-user">{{ comment.user }}</span>
            <span class="kb-comment-user">{{ comment.date }}</span>
            <span class="kb-comment-user">{{ comment.post }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'post', 'comments']
}
</script>

<style>

</style>

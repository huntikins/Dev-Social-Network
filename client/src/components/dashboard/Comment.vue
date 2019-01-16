<template>
    <div class="comment-section">
        <div class="post-comments" v-for="(comment, index) in comments" :key="index">
            <div class="post-comment-wrapper">
                <small class="text-muted mr-2">{{ comment.date }}</small>
                <small><a href="#"  class="post-comment-user">{{ comment.name }}: </a>{{ comment.content }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['comments']
}
</script>

<style>
.comment-section {
    padding: 0px;
    margin-top: 5px;
    background-color: rgba(133,149,149, 0.1)
}
.post-comments {
    text-align: left;
    vertical-align: text-top;
    font-family: roboto, sans-serif;
    font-size: 1.5em;
    margin-left: 25px;
}
.post-comment-user {
    font-family: roboto, sans-serif;
    color: #3dc0ec;
}
.post-comment-user:hover{
    color: #3dc0ec;
    text-decoration: none;
}
.post-comment-wrapper {
    border-bottom: 2px solid rgba(133,149,149, 0.1);
}
</style>

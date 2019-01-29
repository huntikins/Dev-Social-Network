<template>
    <div class="comment-form">
        <form>
            <div class="input-group comment-form-group">
                <textarea class="form-control comment-field" v-model="newComment"></textarea>
                <button class="btn comment-button" @click.prevent="submitComment()">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import api from '../../utils/api.js';
export default {
    props: ['postId'],
    data(){
        return{
            newComment: ""
        }
    },
    methods: {
        submitComment() {
            const self = this;
            api.posts.addComment({
                postId: self.$props.postId,
                comment: self.newComment
            }).then(res => {
                console.log(res);
                this.$emit('commentAdded', res.data);
            });
        }
    }
}
</script>

<style>
    .comment-form{
        background-color: white;
        border-radius: 0 0 25px 25px;
        margin: 0 15px 0 15px;
    }
    .comment-button{
        margin: auto;
        width: 150px;
        height: 40px;
        background: #3dc0ec;
        border-radius: 100px !important;
        color: white;
        font-family: roboto, sans-serif;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .comment-button:hover{
        color: white;
        text-decoration: none;
    }
    textarea.comment-field {
        resize: none;
        margin-right: 15px;
        border-radius: 25px !important;
    }
    .comment-form-group{
        padding: 15px;
    }
    /* higher resolution laptops */
    @media (min-width: 1025px) and (max-width: 1600px)  {
        .comment-form-group {
            height: 70px;
        }
        .comment-button{
            width: 100px;
            height: 40px;
            font-size: 1em;
        }
    }
</style>

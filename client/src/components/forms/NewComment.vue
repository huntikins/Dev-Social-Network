<template>
    <div class="comment-form">
        <form>
            <div class="input-group comment-form-group">
                <textarea class="form-control comment-field" v-model="newComment"></textarea>
                <button class="btn comment-button" @click.prevent="createPost()">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newComment: ""
        }
    },
    methods: {
        createPost(){
            //do something
        }
    }
}
</script>

<style>
    .comment-form{
        background-color: white;
        border-radius: 0 0 25px 25px;
        margin: 0 5px 0 5px;
    }
    .comment-button{
        margin: auto;
        width: 150px;
        height: 40px;
        background: #3dc0ec;
        border-radius: 100px !important;
        color: black;
        font-family: roboto, sans-serif;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: 100;
    }
    textarea.comment-field {
        resize: none;
        margin-right: 15px;
        border-radius: 25px !important;
    }
    .comment-form-group{
        padding: 15px;
    }
</style>

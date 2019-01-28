<template>
    <div class="comment-section">
        <div class="post-comments" v-for="comment in comments" :key="comment._id">
            <div class="post-comment-wrapper">
                <small class="text-muted mr-2 comment-text">{{ formatDate(comment.date) }}</small>
                <small class="comment-text">
                    <router-link :to="`/user/${comment.user._id}`"  class="post-comment-user">{{ `${comment.user.firstName} ${comment.user.lastName}` }}</router-link>
                    : {{ comment.body }}
                </small>
                <div class="comment-overlay" v-if="comment.user._id === currentUserId">
                    <button class="btn btn-danger comment-delete" @click="deleteComment">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props: ['comments', 'currentUserId'],
    methods: {
        formatDate(date) {
            return moment(date).format("MM/DD/YY - hh:mm a");
        },
        deleteComment(){
            //grab comment._id and purge from the DB
        }
    }
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
    font-size: .9em;
    padding-left: 25px;
}
.comment-text {
    font-size: .9em;
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
    position: relative;
}
.comment-overlay {
    position: absolute;
    bottom: 0;
    left: 100%;
    right: 0;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: .5s ease;
}
.post-comment-wrapper:hover .comment-overlay {
  width: 50%;
  left: 50%;
}
.comment-delete {
  color: white;
  font-family: roboto, sans-serif;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 90%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
  border-radius: 0 !important
}
</style>

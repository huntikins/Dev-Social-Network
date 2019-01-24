<template>
    <div class="social-list">
        <div v-for="(post, index) in posts" :key="index">
            <div v-if="post.type === 'content'">
               <app-user-post-con
                    :_id="post._id"
                    :user="post.user"
                    :body="post.body"
                    :url="post.url"
                    :title="post.title"
                    :date="post.date"
                    :likes="post.likes"
                    :comments="post.comments"
                    :image="post.image"
                    :description="post.description"
                    :currentUserId="currentUserId"
               /> 
            </div>
            <div v-else>
               <app-user-post-gen
                    :_id="post._id"
                    :user="post.user"
                    :body="post.body"
                    :date="post.date"
                    :likes="post.likes"
                    :comments="post.comments"
                    :currentUserId="currentUserId"
               /> 
            </div>
        </div>
    </div>
</template>

<script>
// this is general text post
import UserPostGen from '@/components/dashboard/UserPostGen';
// this is formatted content post
import UserPostCon from '@/components/dashboard/UserPostCon';
import api from '../../../utils/api.js';
export default {
    props: ['userId'],
    components: {
        appUserPostGen: UserPostGen,
        appUserPostCon: UserPostCon
    },
    data(){
        return{
            posts: [],
            currentUserId: ''
        }
    },
    created() {
        api.otherUser.getPopulated(this.userId).then(res => {
            console.log(res);
            this.currentUserId = res.data.currentUser;
            this.posts = res.data.otherUser.posts;
        });
    }
}
</script>

<style>
.social-list {
    margin-top: 20px;
    height: 100%;
    border-radius: 25px 25px 0 0;
    padding-bottom: 30vh;
}
</style>

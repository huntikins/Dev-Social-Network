<template>
    <div class="social-list">
        <div v-for="post in posts" :key="post._id">
            <div v-if="post.type === 'content'">
               <app-user-post-con 
                    :user="post.user"
                    :body="post.body"
                    :url="post.url"
                    :title="post.title"
                    :date="post.date"
                    :likes="post.likes"
                    :comments="post.comments"
                    :image="post.image"
                    :description="post.description"
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
    components: {
        appUserPostGen: UserPostGen,
        appUserPostCon: UserPostCon
    },
    data() {
        return{
            posts: []
        }
    },
    beforeCreate() {
        api.posts.getSocialFeed().then(res => {
            console.log(res);
            this.posts = res.data;
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

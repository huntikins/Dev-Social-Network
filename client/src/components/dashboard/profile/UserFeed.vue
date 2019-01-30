<template>
    <div class="social-feed">
        <app-new-post @post-added="update" />
        <app-feed-loader v-if="showLoader"/>
        <app-user-list
            v-if="currentUserId"
            :user-id="userId"
            :posts="posts"
            :current-user-k-b="currentUserKB"
            :current-user-id="currentUserId"
            @saved="postSaved"
            @remove-post="removePost"
        />
    </div>
</template>

<script>
import NewPost from '@/components/forms/NewPost';
import UserList from '@/components/dashboard/profile/UserList';
import api from '@/utils/api';
import FeedLoad from "@/components/modals/FeedLoad";
import { setTimeout } from "timers";
export default {
    props: ['userId'],
    components: {
        appNewPost: NewPost,
        appUserList: UserList,
        appFeedLoader: FeedLoad
    },
    data() {
        return {
            currentUserId: '',
            posts: [],
            currentUserKB: [],
            showLoader: true
        }
    },
    methods: {
        getCurrentUserPosts() {
            api.currentUser.getPosts().then(res => {
                console.log(res);
                this.posts = res.data.posts;
                this.currentUserKB = res.data.kbItems;
                this.currentUserId = res.data.userId;
                this.showLoader = false;
            });
        },
        getOtherUserPosts() {
            api.otherUser.getPosts(this.$props.userId).then(res => {
                console.log(res);
                this.posts = res.data.otherUser;
                this.currentUserKB = res.data.currentUser.kbItems;
                this.currentUserId = res.data.currentUser._id;
                this.showLoader = false;
            });
        },
        update() {
            // check if viewing current or other user's posts
            if (!this.$props.userId || this.$props.userId === this.currentUserId) {
                this.getCurrentUserPosts();
            }
        },
        postSaved(newKbItem) {
            if (!this.$props.userId || this.$props.userId === this.currentUserId) {
                this.$emit('saved', newKbItem);
            }
        },
        removePost(postId) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i]._id === postId) return this.posts.splice(i, 1); 
            }
        }
    },
    created() {
        return this.$props.userId ? this.getOtherUserPosts() : this.getCurrentUserPosts();
    }
};
</script>

<style>
.social-feed {
  height: 100%;
}
</style>

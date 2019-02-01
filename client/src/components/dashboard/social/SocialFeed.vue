<template>
    <div class="social-feed">
        <app-new-post @post-added="refresh"/>
        <app-feed-loader v-if="showLoader"/>
        <app-social-list
            v-if="currentUserId"
            :posts="posts"
            :currentUserKB="currentUserKB"
            :currentUserId="currentUserId"
            @remove-post="removePost"
        />
    </div>
</template>

<script>
import NewPost from '@/components/forms/NewPost';
import SocialList from '@/components/dashboard/social/SocialList';
import api from '@/utils/api';
import FeedLoad from "@/components/modals/FeedLoad";
import { setTimeout } from "timers";
export default {
    components: {
        appNewPost: NewPost,
        appSocialList: SocialList,
        appFeedLoader: FeedLoad
    },
    data() {
        return {
            currentUserId: '',
            posts: [],
            currentUserKB: [],
            isFollowingSelf: false,
            showLoader: true
        };
    },
    methods: {
        getPosts(isFirst) {
            const self = this;
            api.posts.getSocialFeed().then(res => {
                self.posts = res.data.posts;
                self.currentUserKB = res.data.currentUserKB;
                self.currentUserId = res.data.currentUserId;
                self.isFollowingSelf = res.data.currentUserFollowing.indexOf(self.currentUserId) > -1;
                this.showLoader = false;
            });
        },
        refresh() {
            if (this.isFollowingSelf) this.getPosts(); 
        },
        removePost(postId) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i]._id === postId) return this.posts.splice(i, 1); 
            }
        }
    },
    created() {
        this.getPosts(true);
    }
}
</script>

<style>
.social-feed {
    height: 100%;
}
</style>

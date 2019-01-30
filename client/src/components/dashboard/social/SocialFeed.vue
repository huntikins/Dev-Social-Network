<template>
    <div class="social-feed">
        <app-new-post @post-added="refresh"/>
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
export default {
    components: {
        appNewPost: NewPost,
        appSocialList: SocialList
    },
    data() {
        return {
            currentUserId: '',
            posts: [],
            currentUserKB: [],
            isFollowingSelf: false
        };
    },
    methods: {
        getPosts(isFirst) {
            const self = this;
            api.posts.getSocialFeed().then(res => {
                console.log(res);
                self.posts = res.data.posts;
                self.currentUserKB = res.data.currentUserKB;
                self.currentUserId = res.data.currentUserId;
                self.isFollowingSelf = res.data.currentUserFollowing.indexOf(self.currentUserId) > -1;
            });
        },
        refresh() {
            console.log(this.isFollowingSelf)
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

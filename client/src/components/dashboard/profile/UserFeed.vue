<template>
    <div class="social-feed">
        <app-new-post @post-added="update" />
        <app-user-list
            v-if="currentUserId"
            :user-id="userId"
            :posts="posts"
            :current-user-k-b="currentUserKB"
            :current-user-id="currentUserId"
            @saved="postSaved"
        />
    </div>
</template>

<script>
import NewPost from '@/components/forms/NewPost';
import UserList from '@/components/dashboard/profile/UserList';
import api from '@/utils/api';
export default {
    props: ['userId'],
    components: {
        appNewPost: NewPost,
        appUserList: UserList
    },
    data() {
        return {
            currentUserId: '',
            posts: [],
            currentUserKB: []
        }
    },
    methods: {
        getCurrentUserPosts() {
            api.currentUser.getPosts().then(res => {
                console.log(res);
                this.posts = res.data.posts;
                this.currentUserKB = res.data.kbItems;
                this.currentUserId = res.data.userId;
            });
        },
        getOtherUserPosts() {
            api.otherUser.getPosts(this.$props.userId).then(res => {
                console.log(res);
                this.posts = res.data.otherUser;
                this.currentUserKB = res.data.currentUser.kbItems;
                this.currentUserId = res.data.currentUser._id;
            })
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
        }
    },
    created() {
        return this.$props.userId ? this.getOtherUserPosts() : this.getCurrentUserPosts();
    }
}
</script>

<style>
.social-feed {
    height: 100%;
}
</style>

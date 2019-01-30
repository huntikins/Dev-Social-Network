<template>
  <div class="social-list" :postsKey="postsKey">
    <app-feed-loader v-if="!posts.length" />
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
          :currentUserKB="currentUserKB"
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
          :currentUserKB="currentUserKB"
        />
      </div>
    </div>
  </div>
</template>

<script>
// this is general text post
import UserPostGen from "@/components/dashboard/UserPostGen";
// this is formatted content post
import UserPostCon from "@/components/dashboard/UserPostCon";
import api from "../../../utils/api.js";
import FeedLoad from '@/components/modals/FeedLoad'
export default {
  props: ["userId"],
  components: {
    appUserPostGen: UserPostGen,
    appUserPostCon: UserPostCon,
    appFeedLoader: FeedLoad
  },
  data() {
    return {
      posts: [],
      currentUserId: "",
      currentUserKB: [],
      postsKey: 0
    };
  },
  created() {
    this.populatePostList();
  },
  updated() {
    console.log("userList Updated");
    //   this.populatePostList();
  },
  methods: {
    populatePostList() {
      return this.userId
        ? api.otherUser.getPosts(this.userId).then(res => {
            this.currentUserId = res.data.currentUser._id;
            this.posts = res.data.otherUser;
            this.currentUserKB = res.data.currentUser.kbItems;
          })
        : api.currentUser.getPosts().then(res => {
            this.currentUserId = res.data.userId;
            this.posts = res.data.posts;
            this.currentUserKB = res.data.kbItems;
          });
    }
  }
};
</script>

<style>
.social-list {
  margin-top: 20px;
  height: 100%;
  border-radius: 25px 25px 0 0;
  padding-bottom: 30vh;
}
</style>

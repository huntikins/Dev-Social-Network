<template>
  <div class="social-list">
    <app-feed-loader v-if="showLoader"/>
    <div v-for="(post, index) in posts" :key="index">
      <div v-if="post.type === 'content'">
        <app-user-post-con
          :user="post.user"
          :body="post.body"
          :url="post.url"
          :title="post.title"
          :date="post.date"
          :likes="post.likes"
          :comments="post.comments"
        />
      </div>
      <div v-if="post.type === 'text'">
        <app-user-post-gen
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
import UserPostGen from "@/components/dashboard/UserPostGen";
// this is formatted content post
import UserPostCon from "@/components/dashboard/UserPostCon";
import FeedLoad from "@/components/modals/FeedLoad";
export default {
  components: {
    appUserPostGen: UserPostGen,
    appUserPostCon: UserPostCon,
    appFeedLoader: FeedLoad
  },
  data() {
    return {
      showLoader: true,
      posts: []
    };
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

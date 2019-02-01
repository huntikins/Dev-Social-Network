<template>
  <div class="social-list">
    <div v-for="post in posts" :key="post._id">
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
          @saved="postSaved"
          @post-deleted="removePost(post._id)"
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
          v-on:saved="postSaved"
          @post-deleted="removePost(post._id)"
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
import FeedLoad from "@/components/modals/FeedLoad";
import { setTimeout } from "timers";
export default {
  props: ["userId", "posts", "currentUserKB", "currentUserId"],
  components: {
    appUserPostGen: UserPostGen,
    appUserPostCon: UserPostCon
  },
  methods: {
    postSaved(newKbItem) {
      this.$emit("saved", newKbItem);
    },
    removePost(postId) {
      this.$emit("remove-post", postId);
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

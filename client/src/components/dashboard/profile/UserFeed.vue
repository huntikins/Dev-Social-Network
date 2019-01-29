<template>
  <div class="social-feed">
    <app-new-post :reloadFeed="reloadFeed()"/>
    <app-user-list :user-id="userId"/>
  </div>
</template>

<script>
import NewPost from "@/components/forms/NewPost";
import UserList from "@/components/dashboard/profile/UserList";
export default {
  props: ["userId"],
  data() {
    return {
      feedKey: 0
    };
  },
  components: {
    appNewPost: NewPost,
    appUserList: UserList
  },
  methods: {
    reloadFeed() {
      console.log("in reload feed");
    //  this.feedKey++;
    }
  }
};
</script>

<style>
.social-feed {
  height: 100%;
}
</style>

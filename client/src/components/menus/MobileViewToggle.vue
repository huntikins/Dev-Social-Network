<template>
  <div>
    <div id="small-screen-view-toggle-btns">
      <button
        :class="isProfileInfoShowing ? 'small-screen-btn btn active has-image' : 'small-screen-btn btn has-image'"
        title="Profile Info"
        @click="$emit('show-profile-info')"
      >
        <img v-if="profileImage" class="small-screen-view-toggle-image" :src="profileImage" alt="Profile picture" />
        <img
          v-else
          class="small-screen-view-toggle-image"
          src="@/assets/user-icon.png"
          alt="No image for user"
        />
      </button>
      <button
        :class="arePostsShowing ? 'small-screen-btn btn active posts' : 'small-screen-btn btn posts'"
        title="Posts"
        @click="$emit('show-posts')"
      ><i class="far fa-newspaper"></i></button>      
      <button
        :class="isProfileInfoShowing || arePostsShowing ? 'small-screen-btn btn other' : 'small-screen-btn btn active other'"
        :title="isSocialView ? 'Meetup Events' : 'Knowledge Base'"
        @click="$emit('show-other')"
      >
        <i v-if="isSocialView" class="fab fa-meetup" />
        <span v-else class="kb-button-text small-screen">KB</span>
      </button>
    </div>
    <span id="small-screen-view-indicator">{{view}}</span>
  </div>
</template>

<script>
export default {
  props: ['view', 'profileImage', 'isSocialView', 'isCurrentUser', 'isProfileInfoShowing', 'arePostsShowing'],
  components: {

  }
}
</script>

<style>
#small-screen-view-toggle-btns {
  display: none;
  position: fixed;
  left: 70px;
  top: 10px;
  z-index: 20;
}
.small-screen-btn {
  border-radius: 100%;
  background-color: #3dc0ec;
  left: 20px;
  top: 56px;
  border: solid #f39121 2px;
  color: white;
  margin-left: 10px;
}
.small-screen-btn.has-image {
  padding: 0;
  margin-left: 0;
}
.small-screen-view-toggle-image {
  height: 50px;
  width: 50px;
  border-radius: 100%;
}
.small-screen-btn.posts {
  padding: 6.6px 5px;
}
.small-screen-btn > .fa-newspaper {
  font-size: 35.6px;
  color: white;
}
.small-screen-btn.other {
  padding: 4.8px 4.4px;
}
.small-screen-btn > .fa-meetup {
  font-size: 40px;
  color: white;
}
.kb-button-text {
  font-family: alternate-gothic-no-1-d, sans-serif;
  display: inline-block;
  line-height: 1;
  font-size: 40px;
  height: 40px;
  width: 40px;
  color: white;
}
.small-screen-btn.active {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
#small-screen-view-indicator {
  display: none;
  position: fixed;
  z-index: 20;
  right: 18px;
  top: 42px;
  vertical-align: middle;
  color: white;
  font-family: alternate-gothic-no-1-d, sans-serif;
  font-size: 22px;
  max-width: calc(100vw - 270px);
  white-space: nowrap;
  overflow: hidden;
}
@media (max-width: 612px) {
 #small-screen-view-toggle-btns, #small-screen-view-indicator {
    display: inline-block;
  } 
}
@media (max-width: 358px) {
  #small-screen-view-indicator {
    display: none;
  }
}
</style>

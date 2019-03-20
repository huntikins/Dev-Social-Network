<template>
  <div id="side-bar-view-toggle-btns">
    <button class="side-bar-btn left btn" @click="$emit('profile-view', false)">
      <i class="fab fa-meetup"></i>
    </button>
    <button class="side-bar-btn right btn" @click="$emit('profile-view', true)">
      <img v-if="profileImage" class="side-bar-user-image" :src="profileImage" alt="Profile picture" />
      <img
        v-else
        class="side-bar-user-image"
        src="@/assets/user-icon.png"
        alt="No image for user"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: ['profileImage', 'isCurrentUser', 'isSocialView', 'isProfileInfoShowing']

}
</script>

<style>
.side-bar-btn.left {
  z-index: 10;
  position: fixed;
  border-radius: 100%;
  background-color: #3dc0ec;
  padding: 10px;
  left: 20px;
  top: 56px;
  border: solid #f39121 2px;
}
.side-bar-btn > .fa-meetup {
  font-size: 40px;
  color: white;
}
.side-bar-btn.right, .side-bar-user-image {
  height: 90px;
  width: 90px;
  position: fixed;
  z-index: 10;
  left: 100px;
  top: 50px;
  border-radius: 100%;
  border: solid #f39121 2px;
}
@media (min-width: 767px) {
  #side-bar-view-toggle-btns {
    display: none;
  }
}
</style>
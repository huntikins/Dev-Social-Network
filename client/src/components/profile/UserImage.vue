<template>
  <div>
    <img v-if="image" :class="imgClass" :src="image" alt="Profile picture" />
    <img
      v-else
      :class="imgClass"
      src="@/assets/user-icon.png"
      alt="No image for user"
    />
  </div>
</template>

<script>
import api from "../../utils/api.js";

export default {
  props: ["isMobileView", "image"],
  computed: {
    imgClass() {
      return this.$props.isMobileView ? "profile-image mobile img-fluid" : "profile-image img-fluid"
    }
  }
};
</script>

<style>
.profile-image {
  height: 175px;
  width: 175px;
  border: 10px solid #f39121;
  border-radius: 100%;
  position: fixed;
  z-index: 15;
  top: 22px;
  left: 11%;
  overflow: hidden !important;
}
@media (max-width: 1600px) {
  .profile-image {
    height: calc(12.5vw - 25px);
    width: calc(12.5vw - 25px);
    border: 5px solid #f39121;
    position: absolute;
    top: 22px;
    border-radius: 100%;
  }
}
@media (max-width: 1200px) {
  .profile-image {
    height: 125px;
    width: 125px;
    border-radius: 100%;
  }
}
.profile-image.mobile {
  display: none;
}
@media (max-width: 980px) {
  .profile-image {
    height: 12.8vw;
    width: 12.8vw;
  }
}
@media (max-width: 769px) {
  .profile-image {
    display: none;
  }
}
@media (max-width: 612px) {
  .profile-image.mobile {
    display: inline-block;
    top: 10px;
    left: auto;
    right: 10px;
    width: 40vw;
    height: 40vw;
    max-width: 163px;
    max-height: 163px;
  }
}
</style>
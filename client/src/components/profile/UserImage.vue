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
  top: 2%;
  left: 11%;
  overflow: hidden !important;
}
/* higher resolution laptops */
/* @media (min-width: 1025px) and (max-width: 1600px) { */
  .profile-image {
    height: 125px;
    width: 125px;
    border: 5px solid #f39121;
    position: absolute;
    top: 22px;
    border-radius: 100%;
  }
/* } */
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
    width: 40%;
    height: auto;
    max-width: 163px;
  }
}
</style>
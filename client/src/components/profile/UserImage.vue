<template>
  <div>
    <img v-if="image" class="profile-image img-fluid" :src="image" alt="Profile picture" />
    <img
      v-else
      class="profile-image img-fluid"
      src="@/assets/user-icon.png"
      alt="No image for user"
    />
  </div>
</template>

<script>
import api from "../../utils/api.js";

export default {
  props: ["userId", "image"],
};
</script>

<style>
.profile-image {
  height: 175px !important;
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
    height: 125px !important;
    width: 125px;
    border: 5px solid #f39121;
    position: absolute;
    top: 22px !important;
    border-radius: 100%;
  }
/* } */
@media (max-width: 980px) {
  .profile-image {
    height: 12.8vw !important;
    width: 12.8vw !important;
  }
}
@media (max-width: 769px) {
  .profile-image {
    display: none;
  }
}
</style>

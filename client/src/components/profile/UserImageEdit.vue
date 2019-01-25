<template>
  <div :key="userImage" class="edit-img-container">
    <img
      v-if="userImage === null"
      src="@/assets/user-icon.png"
      alt="Avatar"
      class="edit-profile-img img-fluid"
    >
    <img v-else :scr="userImage" alt="Avatar" class="edit-profile-img img-fluid">
    <div class="overlay" @click="upload = true">
      <div class="text">
        <i class="fas fa-user-edit"></i>
      </div>
    </div>
    <app-upload-modal v-if="upload" @close="closeRerender"/>
  </div>
</template>

<script>
import UploadImage from "@/components/modals/UploadImage";

export default {
  data() {
    return {
      upload: false,
      userImage: null
    };
  },
  components: {
    appUploadModal: UploadImage
  },
  methods: {
    closeRerender(value) {
      this.userImage = value;
      this.upload = false;
      // this.$emit = "refresh-image";
      // this.$forceUpdate();
    }
  }
};
</script>

<style>
.edit-img-container {
  position: relative;
  z-index: 15;
  top: 2%;
  left: 11%;
  height: 175px;
  width: 175px;
  border: 10px solid #f39121;
  border-radius: 100%;
}

.edit-profile-img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 100%;
  width: 100%;
  opacity: 0 !important;
  z-index: 16;
  transition: 0.5s ease;
  background-color: rgb(61, 192, 236);
}

.edit-img-container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 3em;
  position: absolute;
  top: 49%;
  left: 54%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>

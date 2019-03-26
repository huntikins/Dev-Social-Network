<template>
  <div :key="compKey" :class="hide ? 'edit-img-container hide' : 'edit-img-container'">
    <img v-if="userImage" :src="userImage" alt="Avatar" class="edit-profile-img img-fluid">
    <img v-else src="@/assets/user-icon.png" alt="Avatar" class="edit-profile-img img-fluid">
    <div class="overlay" @click="isUploading = true">
      <div class="text">
        <i class="fas fa-user-edit"></i>
      </div>
    </div>
    <app-upload-modal v-if="isUploading" @close="closeReRender" :profile-image="userImage" @update-image="updateImage" />
  </div>
</template>

<script>
import UploadImage from "@/components/modals/UploadImage";
import { userInfo } from "os";
import API from "../../utils/api.js";

export default {
  data() {
    return {
      compKey: 0,
      isUploading: false,
      userImage: undefined
    };
  },
  props: ["userId", "hide"],
  components: {
    appUploadModal: UploadImage
  },
  methods: {
    closeReRender(value) {
      this.isUploading = false;
      if (value) {
        this.userImage = value;
      }
      this.compKey++;
    },
    setImage() {
      API.currentUser
        .getImage()
        .then(res => {
          this.userImage = res.data.image;
        })
        .catch(err => console.error(err));
    },
    updateImage(newImageUrl) {
      this.userImage = newImageUrl;
    }
  },
  created() {
    this.setImage();
  }
};
</script>

<style>
.edit-img-container {
  position: absolute;
  z-index: 20;
  top: 2%;
  left: 11%;
  width: 175px;
  height: 175px;
  border: 10px solid #f39121;
  border-radius: 100%;
  background: white;
}
.edit-profile-img {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 100%;
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
  opacity: 0;
  z-index: 16;
  transition: 0.5s ease;
  background-color: rgb(61, 192, 236);
  cursor: pointer;
}
.edit-img-container:hover .overlay {
  opacity: 1;
}
.text {
  color: white;
  font-size: 3em;
  position: absolute;
  z-index: 17;
  top: 49%;
  left: 54%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
@media (max-width: 612px) {
  .edit-img-container.hide {
    display: none;
  }
}
</style>

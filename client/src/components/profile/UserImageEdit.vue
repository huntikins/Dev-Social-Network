<template>
  <div :key="userImage" class="edit-img-container">
    <img
      v-if="userImage"
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
    <app-upload-modal v-if="upload" @close="closeReRender"/>
  </div>
</template>

<script>
import UploadImage from "@/components/modals/UploadImage";
import { userInfo } from "os";

export default {
  data() {
    return {
      upload: false,
      userImage: null
    };
  },
  props: ["image", "getUserData"],
  components: {
    appUploadModal: UploadImage
  },
  methods: {
    closeReRender(value) {
      this.userImage = value;
      this.upload = false;
    },
    setImage() {
      this.upload = false;
      console.log("setImage: ", this.$props.image);
      if (this.$props.image) {
        this.userImage = this.$props.image;
      } else {
        this.userImage = "../../assets/user-icon.png";
      }
    }
  },
  created() {
    console.log("created() image: ", this.$props.image);
  },
  beforeMount() {
    console.log("beforeMount() image: ", this.$props.image);
    this.setImage();
  },
  updated() {
    console.log("updated(): ", this.userImage);
  },
  beforeUpdate() {
    // this.$props.getUserData();
  }
};
</script>

<style>
.edit-img-container {
  position: absolute;
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
  opacity: 0;
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
  z-index: 17;
  top: 49%;
  left: 54%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>

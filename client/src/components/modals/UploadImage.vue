<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container-upload">
          <span class="modal-close" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </span>
          <div class="modal-header m-0 p-0">
            <img
              v-if="profileImage"
              :src="profileImage"
              class="modal-image m-auto p-0 modal-user-image"
              alt="Preview Image"
            >
            <img v-else :src="defaultBrain" class="modal-image m-auto p-0" alt="cerebellum">
          </div>
          <div class="modal-body m-0 p-0">
            <h1 class="modal-header-text m-auto py-4">Choose a new picture</h1>
            <croppa
              class="croppa"
              v-model="croppa"
              accept=".jpg, .png"
              @file-type-mismatch="invalidFiletype"
            ></croppa>
            <!-- <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="profileImage"
                name="profileImage"
                @change="onFileChanged"
                accept="image/png image/jpeg"
              >
              <label class="custom-file-label" for="profileImage">{{ fileNameText }}</label>
            </div> -->
          </div>
          <small class="home-body">{{ message }}</small>
          <div class="modal-footer">
            <button class="btn btn-light modal-default-button" @click="upload">Save</button>
            <button v-if="hasUploaded" class="btn btn-light modal-default-button" @click="emitLink">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import API from "@/utils/userData";
import Brain from "@/assets/logo-brain.svg"; /*Had to do this because @/ file paths are compiled after component renders */

export default {
  props: ['image'],
  data() {
    return {
      defaultBrain: Brain,
      selectedFile: null,
      fileName: null,
      profileImage: this.$props.image,
      hasUploaded: false,
      croppa: {},
      message: ''
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    onUpload() {
      console.log(this.selectedFile)
      const formData = new FormData();
      formData.append("profileImage", this.selectedFile, this.fileName);
      API.putImage(formData)
        .then(res => {
          this.profileImage = res.data.picture;
          this.hasUploaded = true;
          this.fileName = null;
        })
        .catch(err => console.error(err));
    },
    upload() {
      // const croppedPic = this.croppa.generateDataUrl('image/jpeg', .5);
      // console.log(croppedPic)
      // const formData = new FormData();
      // formData.append('profileImage', croppedPic);
      // API.putImage(formData)
      //   .then(res => {
      //     this.profileImage = res.data.picture;
      //     this.hasUploaded = true;
      //     this.fileName = null;
      //   })
      //   .catch(err => console.error(err));
        this.croppa.generateBlob(blob => {
          console.log(blob)
          const formData = new FormData();
          formData.append('profileImage', blob);
          API.putImage(formData)
            .then(res => {
              this.profileImage = res.data.picture;
              this.hasUploaded = true;
              this.fileName = null;
            })
            .catch(err => console.error(err));
        })
    },
    emitLink() {
      this.$emit("close", this.profileImage);
    },
    reSet() {
      this.fileName = null;
      this.profileImage = null;
      this.hasUploaded = false;
    },
    test() {
      
    },
    invalidFiletype() {
      this.message = 'Invalid file type. Please choose a jpeg or png file.'
    }
  },
  computed: {
    fileNameText: function() {
      return this.fileName ? this.fileName : "Upload Image";
    }
  }
};
</script>

<style>
.modal-image {
  width: 95px;
}
.modal-user-image {
  height: 95px;
  width: 95px;
  border-radius: 100%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-header-text {
  color: white;
  font-family: "roboto", "sans-serif";
  text-align: center;
  font-size: 1.5em;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container-upload {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #859595 !important;
  border-radius: 25px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "roboto", "sans-serif";
}
.croppa, .croppa canvas {
  border-radius: 100%;
}
.modal-header {
  margin-top: 0;
  border: none !important;
  clear: both;
  display: block;
  text-align: center !important;
  letter-spacing: 2px;
  font-weight: 100;
}
.modal-footer {
  border: none !important;
}
.modal-body {
  margin: 20px 0;
  border: none !important;
  text-align: center;
}

.modal-default-button {
  margin: auto;
  width: 150px;
  height: 40px;
  background: white;
  border-radius: 100px !important;
  color: black;
  font-family: "roboto", "sans-serif";
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 100;
}
.modal-enter {
  opacity: 0;
}
.modal-close {
  float: right;
  color: white;
  cursor: pointer;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

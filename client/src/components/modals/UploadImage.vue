<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container-upload">
          <span class="modal-close" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </span>
          <div class="modal-header m-0 p-0">
            <img class="modal-image m-auto p-0" src="@/assets/logo-brain.svg" alt="cerebellum">
          </div>
          <div class="modal-body m-0 p-0">
            <h1 class="modal-header-text m-auto py-4">Choose a new picture</h1>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="profileImage"
                name="profileImage"
                @change="onFileChanged"
                accept="image/png, image/jpeg"
              >
              <label class="custom-file-label" for="profileImage">{{ fileNameText }}</label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light modal-default-button" @click="onUpload">Save</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import API from "@/utils/userData";

export default {
  data() {
    return {
      selectedFile: null,
      fileName: null
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    onUpload() {
      const formData = new FormData();
      formData.append("profileImage", this.selectedFile, this.fileName);
      API.putImage(formData)
        .then(res => {
          console.log("img upload res: ", res);
        })
        .catch(err => console.error(err));
    }
  },
  computed: {
    fileNameText: function() {
      return this.fileName ? this.fileName : "Upload Image";
    }
    // setUserImage: function() {
    //   return this.userImage === "" ? "@/assets/logo-brain.svg" : this.userImage;
    // }
  }
};
</script>

<style>
.modal-image {
  width: 95px;
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

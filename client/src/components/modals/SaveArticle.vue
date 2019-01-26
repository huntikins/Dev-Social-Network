<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container-save">
          <span class="modal-close" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </span>
          <div class="modal-header m-0 p-0">
            <img class="modal-image m-auto p-0" src="@/assets/logo-brain.svg" alt="cerebellum">
          </div>
          <div class="modal-body m-0 p-0">
            <h1 class="modal-header-text m-auto py-4">Save this article to your Knowledge Base</h1>
            <!--add form-->
            <form>
              <div class="form-group">
                <input type="text" placeholder="Title" v-model="kBTitle" class="form-control create-comment-title">
              </div>
              <div class="custom-control custom-switch">
                <app-toggle class="comment-toggle"
                  v-model="saveComments" 
                  :value="true"
                  :sync="true"
                  color="#3dc0ec"
                  height="35"
                  width="175"
                  fontSize="15"
                  :labels="{checked: 'Keep Comments', unchecked: 'Ignore Comments'}"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light modal-default-button" @click="saveToKB">Save</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
export default {
  props: ['title', 'url', 'comments', 'body' ],
  data() {
    return {
        kBTitle: this.$props.title,
        saveComments: false,
        comments: []
    };
  },
  components: {
    appToggle: ToggleButton
  },
  methods: {
      saveToKB(){
        /*
          if (saveComments){
            if(this.$props.comments){
              //push user, date, body of comment into array
              let comments = this.$props.comments
              comments.forEach(comment =>{
                  this.comments.push({
                    user: comments.user.firstName + '' + comments.user.lastName,
                    date: comments.date,
                    body: comments.body
                  })
                }
              )
            }
          }
          var newKB = {
            title: this.kBTitle,
            url: this.$props.url,
            body: this.$props.body,
            comments: this.comments
          }
          //push newKB into db
          */
      }
  }
};
</script>

<style>
.modal-image {
  width: 95px;
}
.comment-toggle {
  left: 29%;
}
input.create-comment-title{
  background-color: rgb(133,149,149);
  border: 1px solid #ffffff;
  border-radius: 100px;
  text-align: center;
  color: white;
  font-family: roboto, sans-serif;
}
input.create-comment-title::placeholder {
  color: white !important;
  text-align: center;
  font-family: roboto, sans-serif;
}
input.create-comment-title:focus::placeholder {
  opacity: 0;
}
input.create-comment-title:focus {
  background-color: white;
  text-align: center;
  color: black;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  font-family: roboto, sans-serif;
}
.save-comments {
  font-size: .75em;
  padding-right: 10px;
  margin-top: 10px;
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

.modal-container-save {
  width: 600px;
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

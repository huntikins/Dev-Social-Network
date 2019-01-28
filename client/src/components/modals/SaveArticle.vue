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
            <h1 class="modal-header-text m-auto py-4">{{ heading }}</h1>
            <!--add form-->
            <form id="save-form">
              <div class="form-group text-center">
                <small class="modal-input-lable">Create a title for your KB Entry</small>
                <input type="text" placeholder="Title" v-model="kBTitle" class="form-control create-comment-title">
              </div>
              <div class="custom-control custom-switch">
                <app-toggle class="comment-toggle"
                  v-model="saveComments" 
                  :value="true"
                  :sync="true"
                  color="#3dc0ec"
                  :height="35"
                  :width="175"
                  :fontSize="15"
                  :labels="{checked: 'Keep Comments', unchecked: 'Ignore Comments'}"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              v-if="!isSaved"
              class="btn btn-light modal-default-button"
              type="submit"
              @click.prevent="saveToKB"
              form="save-form"
              :disabled="disableSubmit"
            >
              Save
            </button>
            <button
              v-else
              class="btn btn-light modal-default-button"
              type="submit"
              form="save-form"
              @click.prevent="$emit('saved')"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';
import api from '../../utils/api';
export default {
  props: ['title', 'url', 'comments', 'body', 'postId', 'type', 'date', 'poster' ],
  data() {
    return {
      kBTitle: this.$props.title,
      saveComments: false,
      disableSubmit: false,
      heading: 'Save this article to your Knowledge Base',
      isSaved: false
    };
  },
  components: {
    appToggle: ToggleButton
  },
  methods: {
      saveToKB(){
        let kbItem = {
          post: this.$props.postId,
          poster: this.$props.poster,
          type: this.$props.type,
          body: this.$props.body,
          date: this.$props.date,
          title: this.kBTitle
        };
        if (this.saveComments) kbItem.comments = this.$props.comments;
        if (this.$props.type === 'content') {

        }
        this.disableSubmit = true;
        api.knowledgeBase.add(kbItem)
          .then(res => {
            console.log(res)
            if (res.data.result_2 && res.data.result_2.nModified === 1) {
              this.isSaved = true;
              this.heading = 'The post was successfully added to your Knowledge Base.'
            }
          });
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
.modal-input-lable{
  color: white;
  font-family: "roboto", "sans-serif";
  padding-bottom: 4px;
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
  z-index: 1000000;
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

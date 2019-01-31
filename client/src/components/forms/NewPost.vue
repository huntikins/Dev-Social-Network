<template>
  <div class="new-post-container">
    <form>
      <div class="input-group post_body">
        <textarea
          id="post"
          name="content_body"
          class="form-control"
          v-model="content_body"
          placeholder="Learn something new?"
        ></textarea>
        <button class="input-group-addon btn post_button" @click.prevent="createPost()">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import getUrls from "get-urls";
import moment from "moment";
import api from "../../utils/api.js";
export default {
  data() {
    return {
      content_body: "",
      urlArray: [],
      type: ""
    };
  },
  methods: {
    createPost() {
      //passes string into URL detector
      let urlSet = getUrls(this.content_body);
      //converts Set object to an interator
      // let urlItter = urlSet.entries()
      this.urlArray = [];
      for (let url of urlSet) {
        this.urlArray.push(url);
      }
      const self = this;
      if (this.urlArray.length) {
        this.type = "content";
        const queryUrl =
          "https://api.linkpreview.net/?key=5c3d58afe394c30b8a6aee93efb4be51af5e05ea3ce29&q=";
        axios.get(queryUrl + self.urlArray[0]).then(res => {
          let post = {
            title: res.data.title,
            url: self.urlArray[0],
            description: res.data.description,
            image: res.data.image,
            type: self.type,
            body: self.content_body
          };
          api.posts.createPost(post).then(res_ => {
            console.log(res_);
            this.$emit("post-added");
            this.content_body = ''
          });
        });
      } else {
        this.type = "text";
        let post = {
          type: self.type,
          body: self.content_body
        };
        api.posts.createPost(post).then(res_ => {
          console.log(res_);
          this.$emit("post-added");
          this.content_body = ''
        });
      }
    }
  }
};
</script>

<style>
.new-post-container {
  border-radius: 0 25px 25px 25px;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #3dc0ec;
  -webkit-box-shadow: 12px 14px 30px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 14px 30px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 14px 30px -10px rgba(0, 0, 0, 0.75);
}
.post_body {
  margin: 10px;
  padding: 10px;
  margin-left: 10%;
  width: 90%;
}
textarea#post {
  height: 75px;
  resize: none;
  border-radius: 25px 0 0 25px;
}
.post_button {
  background: #3dc0ec;
  border-radius: 0 25px 25px 0;
  color: white;
  font-family: roboto, sans-serif;
  font-size: 2em;
  text-align: center;
}
.post_button:hover {
  color: white;
}
.post_button:focus {
  border: none;
  box-shadow: none;
}
.post-form-col {
  width: 100%;
}
.post-sumbit-col {
  width: 100%;
}
/* higher resolution laptops */
@media (min-width: 1025px) and (max-width: 1600px) {
  .new-post-container {
    height: 75px;
  }
  textarea#post {
    height: 65px;
    resize: none;
    border-radius: 25px 0 0 25px;
  }
  .post_body {
    margin: 5px;
    padding: 5px;
    margin-left: 10%;
    width: 90%;
  }
}
</style>

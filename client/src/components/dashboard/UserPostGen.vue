<template>
  <div class="post-wrapper" title :key="postGenKey">
    <app-save-article
      v-if="createKB"
      @close="createKB = false"
      @saved="markSaved"
      :comments="comments_"
      :body="body"
      :poster="user"
      :postId="_id"
      type="text"
      :date="date"
    />
    <div class="content-bottom">
      <div class="post-userinfo">
        <div class="post-img-container">
          <!--profilepic-->
          <img
            v-if="user.picture"
            class="img-fluid user-prof-img"
            :src="user.picture"
            :alt="userName"
          >
          <img v-else class="img-fluid user-prof-img" src="@/assets/user-icon.png" :alt="userName">
        </div>
        <div class="post-details">
          <!--username w link to profile @click-->
          <router-link class="post-username" :to="`/user/${user._id}`">{{ userName }}</router-link>
          <!--date-->
          <h3 class="post-date">{{ formattedDate }}</h3>
        </div>
        <div class="post-edit-menu">
          <div v-if="user._id === currentUserId && (edit || remove) === false">
            <!--insert menu component here-->
            <app-update-post @edit="editPost" @remove="deletePost"/>
          </div>
          <div class="text-right" v-if="remove === true">
            <button class="btn btn-danger" @click="purgePost">
              <i class="fas fa-trash-alt"></i>
            </button>
            <span @click="returnOptions" class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group edit-post-group" v-if="edit">
            <textarea class="edit-post-text form-control" v-model="updatedPost"></textarea>
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary edit-post-button"
                type="button"
                @click="updatePost"
              >Update</button>
            </div>
          </div>
          <p v-else class="post-text">{{ body_ }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <!--post likes-->
          <span v-if="liked" @click="unlike()">
            <i class="fas fa-heart post-icon"></i>
          </span>
          <span v-else @click="like()">
            <i class="far fa-heart post-icon"></i>
          </span>
          <small class="post-icon-text">{{ likeCount }} Likes</small>
        </div>
        <div class="col text-center">
          <!--KB add button-->
          <span v-if="saved">
            <i class="fas fa-bookmark post-icon"></i>
            <small class="post-icon-text">Saved</small>
          </span>
          <span v-else @click="addToKB()">
            <i class="far fa-bookmark post-icon"></i>
            <small class="post-icon-text">Save</small>
          </span>
        </div>
        <div class="col text-center">
          <!--comment count + @click for expand-->
          <a
            class="comments"
            href="#"
            @click="expandComments === false ? expandComments = true : expandComments = false"
          >
            <i class="far fa-comment post-icon"></i>
            <small class="post-icon-text">Comments ({{ commentCount }})</small>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col p-0 m-0">
          <!--comment section only shown on collapse - external component -->
          <app-post-comments
            :comments="comments_"
            v-if="expandComments"
            :currentUserId="currentUserId"
            :postId="_id"
            @comment-removed="refreshComments"
          />
          <app-new-comment v-if="expandComments" :postId="_id" @commentAdded="refreshComments"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "@/components/dashboard/Comment";
import NewComment from "@/components/forms/NewComment";
import moment from "moment";
import SaveToKb from "@/components/modals/SaveArticle";
import api from "../../utils/api.js";
import UpdatePost from "@/components/menus/UpdatePost";
export default {
  props: [
    "user",
    "body",
    "date",
    "likes",
    "comments",
    "_id",
    "currentUserId",
    "currentUserKB"
  ],
  data() {
    return {
      postGenKey: 0,
      expandComments: false,
      saved: false,
      liked: this.$props.likes.indexOf(this.currentUserId) > -1,
      likeCount: this.likes ? this.likes.length : 0,
      userName: this.user.firstName + " " + this.user.lastName,
      formattedDate: this.date
        ? moment(this.date).format("MM/DD/YY - hh:mm a")
        : "",
      createKB: false,
      edit: false,
      remove: false,
      updatedPost: this.$props.body,
      comments_: this.$props.comments,
      body_: this.$props.body
    };
  },
  computed: {
    commentCount() {
      return this.comments_ ? this.comments_.length : 0;
    }
  },
  components: {
    appPostComments: Comments,
    appNewComment: NewComment,
    appSaveArticle: SaveToKb,
    appUpdatePost: UpdatePost
  },
  methods: {
    like() {
      const self = this;
      api.posts.like(this._id).then(res => {
        self.likeCount++;
        self.liked = true;
      });
    },
    returnOptions() {
      this.remove = false;
      this.edit = false;
    },
    unlike() {
      const self = this;
      api.posts.unlike(this._id).then(res => {
        self.likeCount--;
        self.liked = false;
      });
    },
    addToKB() {
      this.createKB = true;
    },
    markSaved(newKbItem) {
      this.createKB = false;
      this.saved = true;
      this.$emit("saved", newKbItem);
    },
    editPost() {
      this.edit = true;
    },
    deletePost() {
      this.remove = true;
    },
    updatePost() {
      api.posts
        .updatePost(this.$props._id, this.updatedPost)
        .then(res => {
          if (res.status === 200) {
            this.body_ = this.updatedPost;
          }
        })
        .catch(err => console.error(err));

      this.edit = false;
      this.remove = false;
    },
    purgePost() {
      //remove this post from DB forever
      this.edit = false;
      this.remove = false;
      api.posts.deletePost(this.$props._id).then(res => {
        if (res.data.n) this.$emit("post-deleted");
      });
    },
    refreshComments(updatedPost) {
      this.comments_ = updatedPost.comments;
      if (updatedPost.body !== this.body_) this.body_ = updatedPost.body;
    }
  },
  created() {
    const currentUserKB = this.$props.currentUserKB;
    for (var i = 0; i < currentUserKB.length; i++) {
      if (currentUserKB[i].post === this.$props._id) return (this.saved = true);
    }
  }
};
</script>

<style>
.post-wrapper {
  margin: 10px;
  padding: 0px 0px 5px 0px;
  background-color: white;
  border-radius: 25px;
  border: 4px solid #3dc0ec;
  -webkit-box-shadow: 0px 14px 30px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 30px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 30px -10px rgba(0, 0, 0, 0.75);
}
.post-userinfo {
  padding: 5px 1px 5px 5px;
  margin-top: 10px;
}
.content-bottom {
  padding: 10px 10px 0 10px;
}
textarea.edit-post-text {
  resize: none;
}
textarea.edit-post-text:focus {
  outline: none;
  box-shadow: none;
}
.btn-danger {
  border-radius: 100px;
  font-family: roboto, sans-serif;
}
.edit-post-group {
  width: 96.5%;
  margin: 10px 30px 25px 10px;
}
.edit-post-button {
  background-color: #3dc0ec;
  color: white;
  border: none;
  font-family: roboto, sans-serif;
}
.edit-post-button:focus {
  background-color: #859595;
}
.edit-post-button:hover {
  background-color: #859595;
}
.post-username {
  font-family: alternate-gothic-no-1-d, sans-serif;
  color: #3dc0ec;
  font-size: 2em;
  line-height: 1;
}
.post-username:hover {
  color: #3dc0ec;
  text-decoration: none;
}
.post-userinfo {
  padding: 5px 1px 5px 5px;
  margin-top: 10px;
}
.user-prof-img {
  border-radius: 100%;
  height: 60px;
  width: 60px;
}
.post-date {
  font-family: roboto, sans-serif;
  color: #859595;
  font-size: 0.75em;
}
.post-text {
  padding: 10px;
  font-family: roboto, sans-serif;
  white-space: pre-line;
}
.post-icon {
  color: #3dc0ec;
  font-size: 1em;
}
.post-icon-text {
  color: #3dc0ec;
  font-family: roboto, sans-serif;
  font-size: 1em;
}
.comments:hover {
  text-decoration: none;
}
/* higher resolution laptops */
/* @media (min-width: 1025px) and (max-width: 1600px) { */
  .post-img-container {
    padding: 0 !important;
  }
  .post-userinfo {
    margin-left: 1px !important;
  }
  .post-icon-text {
    font-size: 0.75em;
  }
  .post-icon {
    font-size: 0.75em;
  }
/* } */
</style>

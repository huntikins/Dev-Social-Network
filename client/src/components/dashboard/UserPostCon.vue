<template>
    <div class="post-wrapper" title="">
        <app-save-article v-if="createKB" 
                        @close="createKB=false" 
                        :url="url" 
                        :title="title" 
                        :comments="_comments"
                        :body="body"
                        :currentUserId="currentUserId"/>
        <div class="content-bottom">
            <div class="row post-userinfo">
                <div class="col-1 post-img-container">
                    <!--profilepic-->
                    <img v-if="user.picture" class="img-fluid user-prof-img" :src="user.picture" :alt="userName">
                    <img v-else class="img-fluid user-prof-img" src="@/assets/user-icon.png" :alt="userName">
                </div>
                <div class="col post-details">
                    <!--username w link to profile @click--> 
                    <router-link class="post-username" :to="`/user/${user._id}`">{{ userName }}</router-link>
                    <!--date-->
                    <h3 class="post-date">{{ formattedDate }}</h3>
                </div>
                <div class="col-1" v-if="user._id === currentUserId && (edit || remove) === false">
                    <!--insert menu component here-->
                    <app-update-post @edit="editPost" @remove="deletePost"/>
                </div>
                <div class="col-3" v-if="remove === true">
                    <button class="btn btn-danger" @click="purgePost">Delete Post</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="input-group edit-post-group" v-if="edit">
                        <textarea class="edit-post-text form-control" v-model="updatedPost"></textarea>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary edit-post-button" type="button" @click="updatePost">Update</button>
                        </div>
                    </div>
                    <p v-else class="post-text" v-html="getAnchorTag()"></p>
                    <div class="media content-media-wrapper img-thumbnail" v-if="title && (image || description)">
                        <img :src="image" class="mr-3 img-thumbnail desc-image" alt="...">
                        <div class="media-body content-desc">
                            <h5><a :href="url" target="_blank" class="mt-0 content-link">{{ title }}</a></h5>
                            {{ description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <!--post likes-->
                    <span v-if="liked" @click="unlike()"><i class="fas fa-heart post-icon"></i></span>
                    <span v-else @click="like()"><i class="far fa-heart post-icon"></i></span>
                    <small class="post-icon-text"> {{ likeCount }} Likes</small>
                </div>
                <div class="col text-center">
                    <!--KB add button-->
                    <span v-if="saved" @click="removeFromKB()"><i class="fas fa-bookmark post-icon"></i> <small class="post-icon-text"> Saved</small></span>
                    <span v-else @click="addToKB()"><i class="far fa-bookmark post-icon"></i> <small class="post-icon-text"> Save</small></span>
                </div>
                <div class="col text-center">
                    <!--comment count + @click for expand-->
                    <a class="comments" href="#" @click="expandComments === false ? expandComments = true : expandComments = false">
                        <i class="far fa-comment post-icon"></i> <small class="post-icon-text"> Comments ({{ commentCount }})</small>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col p-0 m-0">
                    <!--comment section only shown on collapse - external component -->
                    <app-post-comments :comments="comments"
                                        v-if="expandComments"
                                        :currentUserId="currentUserId"/>
                    <app-new-comment v-if="expandComments" :postId="_id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/dashboard/Comment';
import linkifyHtml from 'linkifyjs/html';
import NewComment from '@/components/forms/NewComment';
import moment from 'moment';
import SaveToKb from '@/components/modals/SaveArticle'
import api from '../../utils/api.js';
import UpdatePost from '@/components/menus/UpdatePost'
export default {
    props: ['user','body','date','likes','comments', 'title', 'url', 'image', 'description', '_id', 'currentUserId'],
    data(){
        return{
            liked: this.$props.likes.indexOf(this.currentUserId) > -1,
            expandComments: false,
            saved: false,
            text: this.$props.body,
            likeCount: this.likes ? this.likes.length : 0,
            commentCount: this.comments ? this.comments.length : 0,
            userName: this.user.firstName + ' ' + this.user.lastName,
            formattedDate: this.date ? moment(this.date).format("MM/DD/YY - hh:mm a") : '',
            createKB: false,
            edit: false,
            remove: false,
            updatedPost: this.$props.body
        }
    },
    components: {
        appPostComments: Comments,
        appNewComment: NewComment,
        appSaveArticle: SaveToKb,
        appUpdatePost: UpdatePost
    },
    methods: {
        updateComments() {

        },
        like() {
            const self = this;
            api.posts.like(this._id).then(res => {
                console.log(res);
                self.likeCount++;
                self.liked = true;
            });
        },
        unlike() {
            const self = this;
            api.posts.unlike(this._id).then(res => {
                console.log(res);
                self.likeCount--;
                self.liked = false;
            });
        },
        addToKB(){
            this.saved = true
            this.createKB = true
        },
        removeFromKB(){
            this.saved = false
        },
        getAnchorTag(){
            var options = {
                className: 'text-link', 
                format: function (value, type) {
                    if (type === 'url' && value.length > 25) {
                    value = value.slice(0, 25) + '…';
                    }
                    return value;
                }
            }
            var str = this.text;
            return linkifyHtml(str, options);
        },
        editPost(){
            this.edit = true
            console.log(this.edit)
        },
        deletePost(){
            this.remove = true
            console.log(this.remove)
        },
        updatePost() {
            //send this.body to db as the new text to be rerendered
            this.edit = false
            this.remove = false
        },
        purgePost(){
            //remove this post from DB forever
            this.edit = false
            this.remove = false
        }
    }
}
</script>

<style>
.post-wrapper {
    margin: 10px;
    padding: 0px 0px 5px 0px;
    background-color: white;
    border-radius: 25px;
    border: 4px solid #3dc0ec;
    -webkit-box-shadow: 0px 14px 27px -13px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 14px 27px -13px rgba(0,0,0,0.75);
    box-shadow: 0px 14px 27px -13px rgba(0,0,0,0.75);
}
.post-userinfo {
    padding: 5px 1px 5px 5px;
    margin-top: 10px;
}
.user-prof-img{
    border-radius: 100%;
    height: 60px;
    width: 60px;
}
.post-img-container {
    border-radius: 100%;
    height: 100%;
    width: 100%;
}
.btn-danger {
  border-radius: 100px;
  font-family: roboto, sans-serif;
}
.post-details {
    margin-top: 10px;
}
textarea.edit-post-text{
    resize: none;
}
textarea.edit-post-text:focus{
    outline: none;
    box-shadow: none;
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
.text-link {
    color: #3dc0ec;
}
.text-link:hover {
    color: #3dc0ec;
    text-decoration: none;
}
.content-media-wrapper {
    margin: 10px 30px 25px 10px;
    background-color: rgba(133,149,149, 0.2);
}
.content-link {
    color: #3dc0ec;
    font-family: roboto, sans-serif;
    font-size: 1em;
}
.content-link:hover {
    color: #3dc0ec;
}
.content-desc {
    padding: 10px;
    margin: 0 !important;
    font-family: roboto, sans-serif;
    text-align: left;
    color: black;
    font-size: .75em;
}
.desc-image {
    width: 15% !important;
}
.content-top{
    padding: 0 !important;
    margin: 0 !important;
}
.content-bottom{
    padding: 10px 10px 0 10px;
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
.post-date {
    font-family: roboto, sans-serif;
    color: #859595;
    font-size: .75em;
}
.post-text {
    padding: 10px;
    font-family: roboto, sans-serif;
}
.post-title {
    padding: 10px 10px 0 10px;
    font-family: roboto, sans-serif;
    color: #859595;
    font-weight: bold;
}
.post-icon {
    color: #3dc0ec;
    font-size: 1em;
}
.post-icon-text{
    color: #3dc0ec;
    font-family: roboto, sans-serif;
    font-size: 1em;
}
.comments:hover{
    text-decoration: none;
}
/* higher resolution laptops */
@media (min-width: 1025px) and (max-width: 1600px)  {
    .post-img-container {
        padding: 0 !important;
    }
    .post-userinfo {
        margin-left: 1px !important;
    }
    .post-icon-text {
        font-size: .75em;
    }
    .post-icon {
        font-size: .75em;
    }
}
</style>

<template>
    <div class="post-wrapper" title="">
        <div class="content-bottom">
            <div class="row post-userinfo">
                <div class="col-1">
                    <!--profilepic-->
                    <img class="img-fluid" src="@/assets/user-icon.png" alt="">
                </div>
                <div class="col post-details">
                    <!--username w link to profile @click--> 
                    <router-link class="post-username" to="/user">{{ user.name }}</router-link>
                    <!--date-->
                    <h3 class="post-date">{{ formattedDate }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="post-text">{{ body }}</p>
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
                    <app-post-comments :comments="comments" v-if="expandComments"/>
                    <app-new-comment v-if="expandComments" :postId="_id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/dashboard/Comment';
import NewComment from '@/components/forms/NewComment';
import moment from 'moment';
import api from '../../utils/api.js';
export default {
    props: ['user','body','date','likes','comments', '_id', 'currentUserId'],
    data(){
        return{
            expandComments: false,
            saved: false,
            liked: this.$props.likes.indexOf(this.currentUserId) > -1,
            likeCount: this.likes ? this.likes.length : 0,
            commentCount: this.comments ? this.comments.length : 0,
            userName: this.user.firstName + ' ' + this.user.lastName,
            formattedDate: this.date ? moment(this.date).format("MM/DD/YY - hh:mm a") : ''
        }
    },
    components: {
        appPostComments: Comments,
        appNewComment: NewComment
    },
    methods: {
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
        },
        removeFromKB(){
            this.saved = false
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
    -webkit-box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 14px 30px -10px rgba(0,0,0,0.75);
}
.post-userinfo {
    padding: 5px 1px 5px 5px;
    margin-top: 10px;
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
</style>

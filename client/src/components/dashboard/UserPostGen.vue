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
                    <a class="post-username" href="#">{{ user.name }}</a>
                    <!--date-->
                    <h3 class="post-date">{{ date }}</h3>
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
                    <span v-if="clicked" @click="unlike()"><i class="fas fa-heart post-icon"></i></span>
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
                                        v-if="expandComments"/>
                    <app-new-comment v-if="expandComments" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/dashboard/Comment'
import NewComment from '@/components/forms/NewComment'
export default {
    props: ['user','body','date','likes','comments'],
    data(){
        return{
            likeCount: parseInt(this.$props.likes),
            clicked: false,
            commentCount: this.$props.comments.length,
            expandComments: false,
            saved: false
        }
    },
    components: {
        appPostComments: Comments,
        appNewComment: NewComment
    },
    methods: {
        like() {
            this.clicked = true
            this.likeCount++
        },
        unlike(){
            this.clicked = false
            this.likeCount--
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
}
.post-userinfo {
    padding: 5px 1px 5px 5px;
    margin-top: 10px;
}
.content-img {
    border-radius: 25px 25px 0 0;
    float: left;
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

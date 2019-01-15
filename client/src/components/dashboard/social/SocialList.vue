<template>
    <div class="social-list">
        <div v-for="(post, index) in posts" :key="index">
            <div v-if="post.type === 'content'">
               <app-user-post-con 
                    :user="post.user"
                    :body="post.body"
                    :url="post.url"
                    :title="post.title"
                    :date="post.date"
                    :likes="post.likes"
                    :comments="post.comments"
                    :image="post.image"
                    :description="post.description"
               /> 
            </div>
            <div v-if="post.type === 'text'">
               <app-user-post-gen 
                    :user="post.user"
                    :body="post.body"
                    :date="post.date"
                    :likes="post.likes"
                    :comments="post.comments"
               /> 
            </div>
        </div>
    </div>
</template>

<script>
// this is general text post
import UserPostGen from '@/components/dashboard/UserPostGen'
// this is formatted content post
import UserPostCon from '@/components/dashboard/UserPostCon'
export default {
    components: {
        appUserPostGen: UserPostGen,
        appUserPostCon: UserPostCon
    },
    data(){
        return{
            posts: [
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    image: "http://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
                    title: "content",
                    description: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"},{name: "username", content: "post.comments", date: "commentdate"},{name: "username", content: "post.comments", date: "commentdate"},{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "content"
                },
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    title: "content",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "content"
                },
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    title: "text",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "text"
                },
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    title: "text",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "text"
                },
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    title: "text",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "text"
                },
                {
                    user: {name: "John Doe", pic: "url-here", _id: "_id for profile"},
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    url: "post.url",
                    title: "content",
                    date: "post.date",
                    likes: 0,
                    comments: [{name: "username", content: "post.comments", date: "commentdate"}],
                    type: "content"
                },
            ]
        }
    }
}
</script>

<style>
.social-list {
    margin-top: 20px;
    height: 100%;
    border-radius: 25px 25px 0 0;
    padding-bottom: 30vh;
}
</style>

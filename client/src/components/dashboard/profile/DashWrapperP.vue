<template>
    <div class="dash-container">
        <div class="row m-1">
            <div class="social-container">
                <app-user-feed />
            </div>
            <div class="list-container">
                <div class="kb-feed grid" data-masonry='{ "itemSelector": ".grid-item" }'>
                    <app-kb-list 
                        v-for="(article, index) in kbArticles" :key="index"
                        :title="article.title"
                        :link="article.link"
                        :post="article.post"
                        :comments="article.comments"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KbList from '@/components/dashboard/profile/KbList'
import UserFeed from '@/components/dashboard/profile/UserFeed'
export default {
    components: {
        appKbList: KbList,
        appUserFeed: UserFeed
    },
    data(){
        return{
            kbArticles: [
                {
                    title: 'How to create scrollbar',
                    link: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    comments: [
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                    ]
                },
                {
                    title: 'How to create scrollbar',
                    link: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    comments: []
                },
                {
                    title: 'How to create scrollbar',
                    link: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    comments: [
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                    ]
                },
                {
                    title: 'How to create scrollbar',
                    link: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    comments: [
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                        {
                            user: 'Mark Johnson',
                            post: 'wow cool',
                            date: '1/1/19'
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
.kb-feed {
    background-color: rgba(61,192,236, 0);
    padding: 0px 0px 50% 10px;
    border-radius: 25px 0 0 25px;
    height: 100%;
    overflow: scroll;
}
.kb-feed::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
    background-color: #f39121;
}
.kb-feed::-webkit-scrollbar {
	width: 15px;
	background-color: #f39121;
}
.kb-feed::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(61,192,236);
}
.dash-container {
    position: relative;
    width: 87%;
    padding: 0 !important;
    margin-left: 14% !important;
    border-left: 10px solid #f39121;
    overflow-x: hidden;
}
.social-container {
    position: relative;
    height: 100vh !important;
    width: 65%;
}
.list-container {
    position: relative;
    height: 100vh !important;
    width: 33.5%;
    margin-top: 10px;
    border-left: 20px solid #f39121;
}
</style>

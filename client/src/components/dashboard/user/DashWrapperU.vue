<template>
    <div class="dash-container">
        <div class="row m-0 p-0">
            <div class="side-container col-2">
                <app-side-bar-user :user-id="userId" />
            </div>
            <div class="social-container col-7">
                <app-user-feed  :user-id="userId"/>
            </div>
            <div class="list-container col-3">
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
import SideBarUser from '@/components/profile/SideBarUser';
export default {
    components: {
        appKbList: KbList,
        appUserFeed: UserFeed,
        appSideBarUser: SideBarUser
    },
    props: ['userId'],
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
.dash-container {
    position: absolute;
    width: 100%;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    background-color: #f39121;
    margin-top: 10vh;
}
.dash-container::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
    background-color: #f39121;
}
.dash-container::-webkit-scrollbar {
	width: 15px;
	background-color: #f39121;
}
.dash-container::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(61,192,236);
}
.social-container {
    position: relative;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
}
.side-container {
    position: relative;
    margin-left: 0 !important;
    padding-left: 0 !important;
}
.list-container {
    position: relative;
    height: 100% !important;
    margin-top: 10px;
    margin-right: 0 !important;
    padding-right: 0 !important;
}
</style>
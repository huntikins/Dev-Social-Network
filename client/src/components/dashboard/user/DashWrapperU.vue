<template>
    <div>
        <app-user-img :image="userInfo.image" />
        <app-mobile-view-toggle
            v-if="!hideButtons"
            :view="userInfo.firstName ? `${userInfo.firstName}'s Profile` : 'User Profile'"
            :profile-image="userInfo.image"
            :is-social-view="false"
            :is-current-user="false"
            :is-profile-info-showing="isProfileShowing"
            :are-posts-showing="arePostsShowing"
            @show-profile-info="showProfileInfo"
            @show-posts="showPostFeed"
            @show-other="showKbOrEvents"
        />
        <div class="dash-container">
            <!-- Large and medium screen views -->
            <div class="row m-0 p-0">
                <div class="side-container col-md-2">
                    <app-side-bar-user
                        :kb-articles="kbArticles"
                        :user-info="userInfo"
                        :followusr="followusr"
                        :hide-buttons="hideButtons"
                        @follow="follow"
                        @unfollow="unfollow"
                    />
                </div>
                <div class="social-container col-md-7">
                    <app-user-feed :user-id="userId" @saved="postSaved"/>
                </div>
                <div class="list-container col-md-3">
                    <div class="kb-feed grid" data-masonry='{ "itemSelector": ".grid-item" }'>
                        <app-kb-list :kb-articles="kbArticles" />
                    </div>
                </div>
            </div>
            <!-- Small screen view -->
            <div class="single-column-view">
                <app-profile-info
                    v-if="isProfileShowing"
                    :user="userInfo"
                    :is-current-user="false"
                    :followusr="followusr"
                    @follow="follow"
                    @unfollow="unfollow"
                />
                <app-user-feed v-else-if="arePostsShowing" :user-id="userId" @saved="postSaved" />
                <app-kb-list v-else :kb-articles="kbArticles" />
            </div>
        </div>
    </div>
</template>

<script>
import MobileViewToggle from '@/components/menus/MobileViewToggle';
import UserImage from '@/components/profile/UserImage';
import KbList from '@/components/dashboard/profile/KbList'
import UserFeed from '@/components/dashboard/profile/UserFeed'
import ProfileInfo from '@/components/profile/ProfileInfo';
import zipcodes from 'zipcodes';
import SideBarUser from '@/components/profile/SideBarUser';
import api from '../../../utils/api.js';
export default {
    components: {
        appKbList: KbList,
        appUserFeed: UserFeed,
        appSideBarUser: SideBarUser,
        appUserImg: UserImage,
        appMobileViewToggle: MobileViewToggle,
        appProfileInfo: ProfileInfo
    },
    props: ['userId', 'hideButtons'],
    data(){
        return{
            userInfo: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                jobCompany: '',
                zipCode: '',
                location: {},
                interests: [],
                followers: [],
                following: [],
                bio: "",
                image: "",
                _id: ''
            },
            kbArticles: [],
            currentUserId: '',
            followusr: false,
            isProfileShowing: true,
            arePostsShowing: false
        }
    },
    methods: {
        postSaved(newKbItem) {
            this.kbArticles.unshift(newKbItem);
        },
        follow(){
            api.social.follow(this.userInfo._id).then(res => console.log(res));
            this.followusr = true;
            this.userInfo.followers.push(this.currentUserId);
            if (this.userInfo._id === this.currentUserId) this.userInfo.following.push(this.currentUserId);
        },
        unfollow(){
            api.social.unfollow(this.userInfo._id).then(res => console.log(res));
            this.followusr = false;
            this.userInfo.followers.splice(this.userInfo.followers.indexOf(this.currentUserId), 1);
            if (this.userInfo._id === this.currentUserId) this.userInfo.following.splice(this.userInfo.following.indexOf(this.currentUserId), 1);
        },
        showProfileInfo() {
            this.isProfileShowing = true;
            this.arePostsShowing = false;
        },
        showPostFeed() {
            this.isProfileShowing = false;
            this.arePostsShowing = true;
        },
        showKbOrEvents() {
            this.isProfileShowing = false;
            this.arePostsShowing = false;
        }
    },
    created() {
        api.otherUser.getKBItems(this.$props.userId)
            .then(res => {
                console.log(res);
                this.kbArticles = res.data.kbItems.reverse();
                this.currentUserId = res.data.currentUser;
            });
        api.otherUser.getBasic(this.$props.userId).then(res => {
            console.log(res);
            const user = res.data.user;
            this.currentUserId = res.data.currentUser;
            this.followusr = user.followers.indexOf(this.currentUserId) > -1;
            this.userInfo.firstName = user.firstName;
            this.userInfo.lastName = user.lastName;
            this.userInfo.jobTitle = user.jobTitle || '';
            this.userInfo.jobCompany = user.jobCompany || '';
            this.userInfo.zipCode = user.zipCode;
            this.userInfo.location = zipcodes.lookup(parseInt(user.zipCode));
            this.userInfo.interests = user.interests || [];
            this.userInfo.followers = user.followers || [];
            this.userInfo.following = user.following || [];
            this.userInfo.bio = user.bio || '';
            this.userInfo.image = user.picture || "";
            this.userInfo._id = user._id;
        }).catch(err => err.response && err.response.status === 401 ? this.$router.push('/') : console.error(err));
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
.dash-container > .single-column-view {
    display: none;
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
@media (max-width: 769px) {
    .side-container {
        flex: none;
        width: 200px;
        max-width: 200px;
    }
    .social-container {
        flex: none;
        width: calc(100% - 215px);
        max-width: calc(100% - 215px);
    }
    .list-container {
        display: none;
    }
}
@media (max-width: 612px) {
    .dash-container > .row {
        display: none;
    }
    .dash-container > .single-column-view {
        display: block;
    }
    .side-container, .social-container, .list-container {
        width: 100%;
    }
}
</style>

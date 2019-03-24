<template>
    <div>
        <!-- Profile info to show on larger screens -->
        <div class="side-bar-large">
            <app-profile-info :user="userInfo" :is-current-user="false" @follow="follow" @unfollow="unfollow" :followusr="followusr" />
        </div>
        <div class="side-bar-medium">
            <!-- Buttons to switch between sidebar views on medium screens -->
            <app-side-bar-view-toggle-buttons
                :profile-image="userInfo.image"
                :is-social-view="false"
                :is-profile-info-showing="isProfileInfoShowing"
                @profile-view="status => isProfileInfoShowing = status"
            />
            <app-profile-info v-if="isProfileInfoShowing" :is-current-user="false" :user="userInfo" @follow="follow" @unfollow="unfollow" :followusr="followusr" />
            <app-event-list v-else-if="isSocialView" :events="events" />
            <app-kb-list v-else :kb-articles="kbArticles" />
        </div>
    </div>
</template>

<script>
import SideBarToggleButtons from '@/components/profile/SideBarToggleButtons';
import ProfileInfo from './ProfileInfo';
import kbList from '@/components/dashboard/profile/KbList';
import zipcodes from 'zipcodes';
import api from '../../utils/api.js';
export default {
    props: ['userId', 'kbArticles'],
    components: {
        appSideBarViewToggleButtons: SideBarToggleButtons,
        appProfileInfo: ProfileInfo,
        appKbList: kbList
    },
    data(){
        return {
            userInfo: {
                firstName: "",
                lastName: "",
                jobTitle: "",
                zipCode: '',
                jobCompany: "",
                location: '',
                interests: [],
                followers: [],
                following: [],
                bio: "",
                image: "",
                _id: null
            },
            followusr: false,
            currentUserId: null,
            isProfileInfoShowing: true
        }
    },
    computed: {
        friend_count: function() {
            let count = 0;
            const self = this;
            this.followers.forEach(user => {
                if (this.following.indexOf(user) > -1) count++;
            });
            return count;
        },
        follower_count: function() { return this.followers.length },
        following_count: function() { return this.following.length }
    },
    created() {
        api.otherUser.getBasic(this.$props.userId).then(res => {
            const user = res.data.user;
            this.currentUserId = res.data.currentUser;
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
            this.userInfo.followusr = user.followers.indexOf(this.currentUserId) > -1;
            this.userInfo._id = user._id;
        });
    },
    methods: {
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
        }
    },
    filters: {
        firstCap(value){
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>
</style>

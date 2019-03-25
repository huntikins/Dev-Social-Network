<template>
    <div>
        <!-- Profile info to show on larger screens -->
        <div class="side-bar-large">
            <app-profile-info :user="userInfo" :is-current-user="true" />
        </div>
        <div class="side-bar-medium">
            <!-- Buttons to switch between sidebar views on medium screens -->
            <app-side-bar-view-toggle-buttons
                :profile-image="userInfo.image"
                :is-current-user="true"
                :is-social-view="isSocialView"
                :is-profile-info-showing="isProfileInfoShowing"
                @profile-view="status => isProfileInfoShowing = status"
            />
            <app-profile-info v-if="isProfileInfoShowing" :is-current-user="true" :user="userInfo" />
            <app-event-list v-else-if="isSocialView" :events="events" />
            <app-kb-list v-else :kb-articles="kbArticles" />
        </div>
    </div>
</template>

<script>
import SideBarToggleButtons from '@/components/profile/SideBarToggleButtons';
import EventList from '@/components/dashboard/social/EventList';
import ProfileInfo from './ProfileInfo';
import kbList from '@/components/dashboard/profile/KbList';
import zipcodes from 'zipcodes';
import api from '../../utils/api.js';
export default {
    props: ['isSocialView', 'events', 'kbArticles'],
    components: {
        appSideBarViewToggleButtons: SideBarToggleButtons,
        appEventList: EventList,
        appProfileInfo: ProfileInfo,
        appKbList: kbList
    },
    data() {
        return {
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
                image: ""
            },
            isProfileInfoShowing: true
        }
    },
    beforeCreate() {
        api.currentUser.getBasic().then(res => {
            console.log(res)
            const user = res.data;
            this.userInfo = {
                firstName: user.firstName,
                lastName: user.lastName,
                jobTitle: user.jobTitle || '',
                jobCompany: user.jobCompany || '',
                zipCode: user.zipCode,
                location: zipcodes.lookup(parseInt(user.zipCode)) || {},
                interests: user.interests || [],
                followers: user.followers || [],
                following: user.following || [],
                bio: user.bio || '',
                image: user.picture || ''
            }
        });
    }
}
</script>

<style>
.side-bar-large {
    display: none;
}
@media (min-width: 769px) {
  .side-bar-medium {
    display: none;
  }
  .side-bar-large {
    display: block;
  }
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {

}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (max-width: 767.5px) {

}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 319px) and (max-width: 480px) {

}
/*galaxy s5*/
@media (width: 360px) {

}
/*pixel 2*/
@media (width: 411px) {

}
/*iphone 5SE*/
@media (width: 320px) {
 
}
/*iphone 6/7/8*/
@media (width: 375px) {

}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {

}
/*iphone X*/
@media (width: 375px) {

}
/*iPad pro*/
@media (width: 1024px) {

}
</style>

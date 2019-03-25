<template>
    <div>
        <!-- Profile info to show on larger screens -->
        <div class="side-bar-large">
            <app-profile-info
                :user="userInfo"
                :is-current-user="false"
                :followusr="followusr"
                @follow="$emit('follow')"
                @unfollow="$emit('unfollow')"
            />
        </div>
        <div class="side-bar-medium">
            <!-- Buttons to switch between sidebar views on medium screens -->
            <app-side-bar-view-toggle-buttons
                :profile-image="userInfo.image"
                :is-social-view="false"
                :is-profile-info-showing="isProfileInfoShowing"
                @profile-view="status => isProfileInfoShowing = status"
            />
            <app-profile-info
                v-if="isProfileInfoShowing"
                :is-current-user="false"
                :user="userInfo"
                :followusr="followusr"
                @follow="$emit('follow')"
                @unfollow="$emit('unfollow')"
            />
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
    props: ['kbArticles', 'userInfo', 'followusr'],
    components: {
        appSideBarViewToggleButtons: SideBarToggleButtons,
        appProfileInfo: ProfileInfo,
        appKbList: kbList
    },
    data(){
        return {
            isProfileInfoShowing: true
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
</style>

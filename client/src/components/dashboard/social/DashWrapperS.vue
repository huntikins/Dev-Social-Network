<template>
    <div>
        <app-user-img :image="userInfo.image" />
        <div class="dash-container">
            <div class="row m-0 p-0">
                <div class="side-container col-md-2">
                    <app-side-bar :is-social-view="true" :events="events" :user-info="userInfo"/>
                </div>
                <div class="social-container col-md-7">
                    <app-social-feed />
                </div>
                <div class="list-container col-md-3">
                    <app-event-list :events="events" />
                </div>
            </div>
            <div class="single-column-view">
                <app-event-list :events="events" />

            </div>
        </div>
    </div>
</template>

<script>
import UserImage from '@/components/profile/UserImage';
import EventList from '@/components/dashboard/social/EventList'
import SocialFeed from '@/components/dashboard/social/SocialFeed'
import zipcodes from 'zipcodes';
import SideBar from '@/components/profile/SideBar';
import api from '@/utils/api';
export default {
    data(){
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
            events: []
        }
    },
    components: {
        appEventList: EventList,
        appSocialFeed: SocialFeed,
        appSideBar: SideBar,
        appUserImg: UserImage
    },
    beforeCreate() {
        api.events.getEventsList().then(res => this.events = res.data);
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
        }).catch(err => err.response.status === 401 ? this.$router.push('/') : console.error(err.response.data));
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
        max-width: none;
    }
    .social-container {
        flex: none;
        width: calc(100% - 215px);
        max-width: none;
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

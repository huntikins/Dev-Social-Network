<template>
    <div class="dash-container">
        <div class="row m-0 p-0">
            <div class="side-container col-2">
                <app-side-bar />
            </div>
            <div class="social-container col-7">
                <app-social-feed />
            </div>
            <div class="list-container col-3">
                <app-event-list />
            </div>
        </div>
    </div>
</template>

<script>
import EventList from '@/components/dashboard/social/EventList'
import SocialFeed from '@/components/dashboard/social/SocialFeed'
import SideBar from '@/components/profile/SideBar';
export default {
    components: {
        appEventList: EventList,
        appSocialFeed: SocialFeed,
        appSideBar: SideBar
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

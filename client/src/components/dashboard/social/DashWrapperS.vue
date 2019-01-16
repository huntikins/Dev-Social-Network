<template>
    <div class="dash-container">
        <div class="row m-0 p-0">
            <div class="social-container">
                <app-social-feed />
            </div>
            <div class="list-container">
                <app-event-list />
            </div>
        </div>
    </div>
</template>

<script>
import EventList from '@/components/dashboard/social/EventList'
import SocialFeed from '@/components/dashboard/social/SocialFeed'
export default {
    components: {
        appEventList: EventList,
        appSocialFeed: SocialFeed
    }
}
</script>

<style>
.dash-container {
    position: absolute;
    width: 86%;
    padding: 0;
    left: 14% !important;
    border-left: 10px solid #f39121;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    background-color: #f39121;
    margin-top: 13vh;
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
    width: 65%;
}
.list-container {
    position: relative;
    height: 100%;
    width: 35%;
    margin-top: 10px;
}
</style>

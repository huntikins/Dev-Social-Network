<template>
    <div class="dash-container">
        <div class="row m-1">
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
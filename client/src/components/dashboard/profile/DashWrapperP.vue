<template>
    <div class="dash-container">
        <div class="row m-1">
            <div class="social-container">
                <app-user-feed />
            </div>
            <div class="list-container">
                <app-kb-list />
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
    width: 35%;
    margin-top: 10px;
    border-left: 20px solid #f39121;
}
</style>

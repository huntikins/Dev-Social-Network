<template>
    <div class="dash-container">
        <div class="row m-1">
            <div class="col-8 bg-white mr-3">
                <app-social-feed />
            </div>
            <div class="col bg-white">
                <app-list-pane />
            </div>
        </div>
    </div>
</template>

<script>
import ListPane from '@/components/dashboard/ListPane'
import SocialFeed from '@/components/dashboard/SocialFeed'
export default {
    components: {
        appListPane: ListPane,
        appSocialFeed: SocialFeed
    }
}
</script>

<style>
.dash-container {
    position: fixed;
    left: 17vw;
    border-top: 10px solid #f39121;
    width: 82.5vw;
}
.col {
    height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
}
</style>

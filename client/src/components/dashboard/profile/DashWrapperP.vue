<template>
    <div class="dash-container">
        <div class="row m-0 p-0">
            <div class="side-container col-md-2">
                <app-side-bar :kb-articles="kbArticles" />
            </div>
            <div class="social-container col-md-7">
                <app-user-feed @saved="postSaved" />
            </div>
            <div class="list-container col-md-3">
                <app-kb-list :kb-articles="kbArticles" />
            </div>
        </div>
    </div>
</template>

<script>
import KbList from '@/components/dashboard/profile/KbList'
import UserFeed from '@/components/dashboard/profile/UserFeed'
import SideBar from '@/components/profile/SideBar';
import api from '@/utils/api';
export default {
    components: {
        appKbList: KbList,
        appUserFeed: UserFeed,
        appSideBar: SideBar
    },
    data(){
        return{
            kbArticles: []
        }
    },
    methods: {
        postSaved(newKbItem) {
            this.kbArticles.unshift(newKbItem);
        }
    },
    created() {
        api.currentUser.getKBItems()
            .then(res => {
                this.kbArticles = res.data.kbItems.reverse();
            });
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
@media (max-width: 769px) {
    .side-container {
        width: 200px;
    }
    .social-container {
        width: calc(100% - 215px);
    }
    .list-container {
        display: none;
    }
}
</style>

<template>
    <div>
        <div class="profile-content">
            <app-boomerang-user />
            <app-dash-wrapper-p />
        </div>
    </div>
</template>

<script>
import BoomerangUser from '@/components/profile/BoomerangUser'
import DashWrapperP from '@/components/dashboard/user/DashWrapperP'
export default {
    components: {
        appBoomerangUser: BoomerangUser,
        appDashWrapperP: DashWrapperP
    }
}
</script>

<style>
.profile-content {
    background-color: #f39121;
    height: 100%;
}
</style>

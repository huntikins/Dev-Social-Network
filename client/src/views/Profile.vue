<template>
    <div>
        <div class="profile-content">
            <app-boomerang />
            <app-dash-wrapper-p />
        </div>
    </div>
</template>

<script>
import Boomerang from '@/components/profile/Boomerang'
import DashWrapperP from '@/components/dashboard/profile/DashWrapperP'
export default {
    components: {
        appBoomerang: Boomerang,
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

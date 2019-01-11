<template>
    <div>
        <div class="profile-content">
            <app-boomerang />
            <app-dash-wrapper />
        </div>
    </div>
</template>

<script>
import Boomerang from '@/components/profile/Boomerang'
import DashWrapper from '@/components/dashboard/DashWrapper'
export default {
    components: {
        appBoomerang: Boomerang,
        appDashWrapper: DashWrapper
    }
}
</script>

<style>
.profile-content {
    background-color: #f39121;
    height: 100vh;
    overflow-y: hidden;
}
</style>

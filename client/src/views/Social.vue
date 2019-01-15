<template>
    <div>
        <div class="social-content">
            <app-boomerang />
            <app-dash-wrapper-s />
        </div>
    </div>
</template>

<script>
import Boomerang from '@/components/profile/Boomerang'
import DashWrapperS from '@/components/dashboard/social/DashWrapperS'
export default {
    components: {
        appBoomerang: Boomerang,
        appDashWrapperS: DashWrapperS
    }
}
</script>

<style>
.social-content {
    background-color: #f39121;
    height: 100%;
}
</style>
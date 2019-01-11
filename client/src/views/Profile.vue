<template>
    <div class="profile-content">
        <app-boomerang />
    </div>
</template>

<script>
import Boomerang from '@/components/profile/Boomerang'
export default {
    components: {
        appBoomerang: Boomerang
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

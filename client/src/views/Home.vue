<template>
    <div class="home-content">
        <app-logo />
        <app-anime />
    </div>
</template>

<script>
import logo from '@/components/home/Logo'
import AnimeLogo from '@/components/home/LogoAnime'
export default {
    name: 'body',
    components: {
        appLogo: logo,
        appAnime: AnimeLogo
    }
}
</script>

<style>
.home-content {
    background-color: #859595;
    height: auto;
    overflow-y: hidden;
}
</style>

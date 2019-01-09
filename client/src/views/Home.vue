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
.home-header {
    color: white !important;
    font-family: alternate-gothic-no-1-d, sans-serif;
}
.home-body {
    color: white;
    font-family: roboto, sans-serif;
}
</style>

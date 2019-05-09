<template>
    <div class="container logo-div">
        <div class="row">
            <app-img-lrg></app-img-lrg>
        </div>
        <div class="row">
            <app-txt-lrg :isGuest="isGuest" />
        </div>
    </div>
</template>

<script>
import LogoImg from '@/components/home/ImgLrg'
import LogoTxt from '@/components/home/Brand'
export default {
    props: ['isGuest'],
    components: {
        appImgLrg: LogoImg,
        appTxtLrg: LogoTxt
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>
.logo-div {
    padding-top: 5%;
    position: relative;
    z-index: 2;
}
</style>

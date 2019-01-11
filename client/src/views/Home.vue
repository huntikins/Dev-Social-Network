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
    name: 'home',
    components: {
        appLogo: logo,
        appAnime: AnimeLogo
    }
}
</script>

<style  lang="scss">
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
/* higher resolution desktops */
@media (min-width: 1281px) {
    .logo-div{
        padding-top: 10%;
    }
    .modal-container-login {
        width: 400px;
        height: 600px;
    }
    .modal-container-newusr {
        height: 600px;
    }
}
/* Laptops, Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
    .logo-div{
        padding-top: 10%;
    }
    .button-join {
        left: 33%;
    }
    .modal-container-login {
        width: 400px;
        height: 600px;
    }
    .modal-container-newusr {
        height: 600px;
    }
    .wrapper-anime {
        svg {
            width: 500%;
		    height: auto;
        }
    }
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {
    .logo-div{
        padding-top: 20%;
    }
    .modal-container-login {
        width: 400px;
        height: 600px;
    }
    .button-join {
        left: 27.5%;
    }
    .wrapper-anime {
        svg {
            width: 600%;
		    height: auto;
        }
    }
}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .logo-div{
        padding-top: 15%;
    }
    
}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (min-width: 481px) and (max-width: 767px) {
    .logo-div{
        padding-top: 33%;
    }
    .wrapper-anime {
        svg {
            width: 600%;
		    height: auto;
        }
    }
    .button-join {
        left: 23%;
        width: 115px;
        height: 35px;
        font-size: 15px;
    }
    .button-login {
        left: 52%;
        width: 115px;
        height: 35px;
        font-size: 15px;
    }
    .text-logo {
        width: 425px;
        height: auto !important;
    }
    .logo-img {
        height: 200px;
        padding-bottom: 50px;
    }
    .modal-container-login {
        width: 100vw;
        height: 100vh;
        border-radius: 0 !important;
    }
    .modal-body {
        margin-top: 10% !important;
    }
    .modal-image {
        width: 150px;
    }
    .modal-container-newusr {
        width: 100vw;
        height: 100vh;
        border-radius: 0 !important;
    }
  
}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 320px) and (max-width: 480px) {
     .logo-div{
        padding-top: 33%;
    }
    .wrapper-anime {
        overflow: hidden;
        svg {
            width: 900%;
		    height: auto;
        }
    }
    .button-join {
        left: 19%;
        width: 90px;
        height: 30px;
        font-size: 10px;
    }
    .button-login {
        left: 53%;
        width: 90px;
        height: 30px;
        font-size: 10px;
    }
    .text-logo {
        width: 290px;
        height: auto !important;
    }
    .logo-img {
        height: 200px;
        padding-bottom: 50px;
    }
    .modal-container-login {
        width: 100vw;
        height: 100vh;
        border-radius: 0 !important;
    }
    .modal-body {
        margin-top: 10% !important;
    }
    .modal-image {
        width: 150px;
    }
    .modal-container-newusr {
        width: 100vw;
        height: 100vh;
        border-radius: 0 !important;
    }
}
/*galaxy s5*/
@media (width: 360px) {
    .button-join {
        left: 23%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .button-login {
        left: 53%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .text-logo {
        width: 325px;
        height: auto !important;
    }
}
/*pixel 2*/
@media (width: 411px) {
    .text-logo {
        width: 350px;
        height: auto !important;
    }
    .button-join {
        left: 25%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .button-login {
        left: 53%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
}
/*iphone 5SE*/
@media (width: 320px) {
    .button-join {
        left: 21%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .button-login {
        left: 52%;
        width: 85px;
        height: 25px;
        font-size: 10px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
}
/*iphone 6/7/8*/
@media (width: 375px) {
    .text-logo {
        width: 350px;
        height: auto !important;
    }
    .button-join {
        left: 22%;
        width: 90px;
        height: 30px;
        font-size: 11px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .button-login {
        left: 54%;
        width: 90px;
        height: 30px;
        font-size: 11px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {
    .text-logo {
        width: 375px;
        height: auto !important;
    }
    .button-join {
        left: 23%;
        width: 100px;
        height: 35px;
        font-size: 12px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .button-login {
        left: 53%;
        width: 100px;
        height: 35px;
        font-size: 12px !important;
        letter-spacing: 2px;
        font-weight: 100;
    }
}
/*iphone X*/
@media (width: 375px) {
    
}
/*iPad pro*/
@media (width: 1024px) {
    
}
</style>

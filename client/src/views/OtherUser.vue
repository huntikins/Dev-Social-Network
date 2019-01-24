<template>
    <div>
        <div class="profile-content">
            <app-boomerang-user :user-id="userId" />
            <app-dash-wrapper-p :user-id="userId" />
        </div>
    </div>
</template>

<script>
import BoomerangUser from '@/components/profile/BoomerangUser'
import DashWrapperP from '@/components/dashboard/user/DashWrapperP'
export default {
    props: ['userId'],
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
/* higher resolution desktops */
@media (min-width: 1281px) {
    
}
/* Laptops, Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
    
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {
    
}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (min-width: 481px) and (max-width: 767px) {
  
}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 320px) and (max-width: 480px) {
    
}
/*galaxy s5*/
@media (width: 360px) {
    
}
/*pixel 2*/
@media (width: 411px) {
    
}
/*iphone 5SE*/
@media (width: 320px) {
    
}
/*iphone 6/7/8*/
@media (width: 375px) {
   
}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {
  
}
/*iphone X*/
@media (width: 375px) {
    
}
/*iPad pro*/
@media (width: 1024px) {
    
}
</style>

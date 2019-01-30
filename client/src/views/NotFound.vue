<template>
    <div class="error-page">
        <div class="container text-center">
            <h1 class="error-header my-4">404</h1>
            <p class="error-subheader my-4">Page Does Not Exist</p>
            <img src="https://media.giphy.com/media/137X5F9GDo7wS4/giphy.gif" alt="BMO" class="my-4">
            <p class="error-subheader my-4">Return to previous page or click to go <router-link to="/" class="text-white"><u>home</u></router-link></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.error-page{
    background-color: #859595;
}
.error-header {
    font-size: 15em;
    color: white;
    font-family: roboto, sans-serif;
}
.error-subheader {
    color: white;
    font-size: 2em;
    font-family: roboto, sans-serif;
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

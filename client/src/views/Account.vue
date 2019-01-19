<template>
  <div class="account-page">
    <app-nav-top/>
    <app-user-img-edit/>
    <div id="account-root">
      <div id="account-management" class="container">
        <section class="row justify-content-md-center">
          <div class="col-10">
            <div id="demographic-info" class="section-wrapper" v-if="!editDemographics">
              <div class="pos-relative">
                <button class="btn circle-button" @click="editDemographics = true">
                  <i class="fas fa-pencil-alt edit-pencil"></i>
                </button>
                <!-- <p>{{user.firstname + user.lastname}}</p>
                <p>{{user.email}}</p>
                <p>{{user.zipcode}}</p>
                <p>{{user.job}}</p>-->
                <h3>Ryan Freeman</h3>
                <p>ryanjfreeman77@gmail.com</p>
                <p>66215</p>
                <p>Soleran Support</p>
              </div>
            </div>
            <app-demo-form v-if="editDemographics" class="section-wrapper"/>
          </div>
        </section>

        <section class="row justify-content-md-center">
          <div class="col-10">
            <div id="interests" class="section-wrapper" v-if="!editInterests">
              <div class="pos-relative">
                <button class="btn circle-button" @click="editInterests = true">
                  <i class="fas fa-pencil-alt edit-pencil"></i>
                </button>
                <h4>Interests</h4>
                <ul>
                  <!-- <li v-for="(interest, index) in user.interests" :key="index">{{user.interest}}</li> -->
                  <li>Dogs</li>
                  <li>Pizzza</li>
                  <li>Javascript</li>
                  <li>React.js :)</li>
                </ul>
              </div>
            </div>
            <app-interests v-if="editInterests" class="section-wrapper"/>
          </div>
        </section>

        <section class="row justify-content-md-center">
          <div class="col-10">
            <div id="bio" class="section-wrapper" v-if="!editBio">
              <div class="pos-relative">
                <button class="btn circle-button" @click="editBio = true">
                  <i class="fas fa-pencil-alt edit-pencil"></i>
                </button>
                <h4>Biography</h4>
                <!-- <p>{{user.bio}}</p> -->
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  Section 1.10.32 of "de Finibus Bonorum et
                </p>
              </div>
            </div>
            <app-biography class="section-wrapper" v-if="editBio"/>
          </div>
        </section>
        <app-delete-account v-if="purge"  @close="purge = false"/>
        <section class="row justify-content-md-center pb-4">
          <div class="col-8 text-center pb-4">
              <button class="btn btn-danger" @click="purge = true">Delete Account</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
// import API from "./utils";
import NavTop from "@/components/profile/NavTop";
import UserImageEdit from "@/components/profile/UserImageEdit";
import DemographicForm from "@/components/forms/Demographic";
import InterestsForm from "@/components/forms/Interests";
import BiographyForm from "@/components/forms/Biography";
import DeleteAccount from '@/components/modals/DeleteAccount';

export default {
  data() {
    return {
      editDemographics: false,
      editInterests: false,
      editBio: false,
      purge: false
    };
  },
  props: ["user"],
  components: {
    appNavTop: NavTop,
    appUserImgEdit: UserImageEdit,
    appDemoForm: DemographicForm,
    appInterests: InterestsForm,
    appBiography: BiographyForm,
    appDeleteAccount: DeleteAccount
  }
};
</script>

<style>
.account-page {
  position: relative;
}
#account-root {
  background-color: #f39121;
  height: 100vh;
  overflow-y: hidden;
}
#account-management {
  background-color: rgb(236, 239, 241);
  height: 100vh;
  margin-top: 4%;
  padding: 2% 0 5% 0;
  overflow-y: scroll;
}
#account-management::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
    background-color: #f39121;
}
#account-management::-webkit-scrollbar {
	width: 15px;
	background-color: #f39121;
}
#account-management::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(61,192,236);
}

.section-wrapper {
  width: 60%;
  margin: 30px auto;
  padding: 5px 20px;
  background-color: white;
  border-radius: 20px;
}
.pos-relative {
  position: relative;
}
.btn-danger {
  border-radius: 100px;
}
.circle-button {
  border-radius: 100% !important;
  background-color: slategray !important;
  position: absolute;
  top: 20px;
  right: 0%;
  left: 98%;
}

.edit-pencil {
  color: rgb(236, 239, 241);
}
/* higher resolution laptops */
@media (min-width: 1281px) and (max-width: 1600px)  {
    .edit-img-container{
      height: 100px;
      width: 100px;
      border: 5px solid #f39121;
      top: 3%;
    }
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

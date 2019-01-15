<template>
  <div id="account-root">
    <app-nav-top/>
    <app-user-img/>
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

      <section class="row justify-content-md-center">
        <div class="col-8"></div>
      </section>
    </div>
  </div>
</template>


<script>
// import API from "./utils";
import NavTop from "@/components/profile/NavTop";
import UserImage from "@/components/profile/UserImage";
import DemographicForm from "@/components/forms/Demographic";
import InterestsForm from "@/components/forms/Interests";
import BiographyForm from "@/components/forms/Biography";

export default {
  data() {
    return {
      editDemographics: false,
      editInterests: false,
      editBio: false
    };
  },
  props: ["user"],
  components: {
    appNavTop: NavTop,
    appUserImg: UserImage,
    appDemoForm: DemographicForm,
    appInterests: InterestsForm,
    appBiography: BiographyForm
  }
};
</script>

<style scoped>
#account-root {
  background-color: #f39121;
  height: 100vh;
  overflow-y: hidden;
}

#account-management {
  background-color: rgb(236, 239, 241);
  height: 100%;
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
</style>

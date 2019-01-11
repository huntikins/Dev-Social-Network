<template>
  <div id="account-root">
    <app-nav-top/>
    <app-user-img/>
    <div id="account-management" class="container">
      <section class="row justify-content-md-center">
        <div class="col-8">
          <div id="demographic-info" class="section-wrapper" v-if="!editDemographics">
            <div class="pos-relative">
              <button class="btn circle-button" @click="editDemographics = true">
                <i class="fas fa-pencil-alt"></i>
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
        </div>
      </section>

      <section class="row justify-content-md-center">
        <div class="col-8">
          <div id="interests" class="section-wrapper" v-if="!editInterists">
            <div class="pos-relative">
              <button class="btn circle-button" @click="editInterists = true">
                <i class="fas fa-pencil-alt"></i>
              </button>
              <h4>Interests</h4>
              <ul>
                <!-- <li v-for="(interest, index) in user.interests" :key="index">{{interest}}</li> -->
                <li>Dogs</li>
                <li>Pizzza</li>
                <li>Javascript</li>
                <li>React.js :)</li>
              </ul>
            </div>
          </div>
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

export default {
  data() {
    return {
      editDemographics: false,
      editInterists: false,
      editBio: false
    };
  },
  props: ["user"],
  components: {
    appNavTop: NavTop,
    appUserImg: UserImage
  }
};
</script>

<style>
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
  position: relative;
  top: 20px;
  right: 0%;
  left: 98%;
}

.fa-pencil-alt {
  color: rgb(236, 239, 241);
}
</style>

<template>
  <div class="account-page">
    <app-nav-top/>
    <app-user-img-edit :userId="userId"/>
    <div id="account-management" class="container">
      <section class="row justify-content-md-center">
        <div class="col-10">
          <div id="demographic-info" class="section-wrapper" v-if="!editDemographics">
            <div class="pos-relative">
              <button class="btn circle-button" @click="editDemographics = true">
                <i class="fas fa-pencil-alt edit-pencil"></i>
              </button>
              <h3>{{`${demographics.firstName} ${demographics.lastName}`}}</h3>
              <p>{{demographics.email}}</p>
              <p>{{demographics.zipCode}}</p>
              <p>{{demographics.jobTitle || 'No job title.'}}</p>
              <p>{{`at ${demographics.jobCompany}` || 'No job company.'}}</p>
            </div>
          </div>
          <app-demo-form
            :dem-info="demographics"
            v-if="editDemographics"
            class="section-wrapper"
            @update-demographics="updateDemographicsDisplay"
            @close="editDemographics = false"
          />
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
                <li v-for="(interest, index) in interests" :key="index">{{interest}}</li>
              </ul>
            </div>
          </div>
          <app-interests
            v-if="editInterests"
            class="section-wrapper"
            :interests="interests"
            @close="editInterests = false"
            @update-interests="updateInterestsDisplay"
          />
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
              <p>{{biography}}</p>
            </div>
          </div>
          <app-biography
            class="section-wrapper"
            v-if="editBio"
            :biography="biography"
            @close="editBio = false"
            @update="updateBioDisplay"
          />
        </div>
      </section>

      <app-delete-account v-if="purge" @close="purge = false"/>

      <section class="row justify-content-md-center pb-4">
        <div class="col-8 text-center pb-4">
          <button class="btn btn-danger" @click="purge = true">Delete Account</button>
        </div>
      </section>
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
import API from "@/utils/userData";
import api from "@/utils/api";
import DeleteAccount from "@/components/modals/DeleteAccount";

export default {
  data() {
    return {
      accountKey: 0,
      editDemographics: false,
      editInterests: false,
      editBio: false,
      demographics: {},
      interests: [],
      biography: "",
      purge: false,
      image: "",
      userId: ""
    };
  },
  /*  props: ["user"],*/
  components: {
    appNavTop: NavTop,
    appUserImgEdit: UserImageEdit,
    appDemoForm: DemographicForm,
    appInterests: InterestsForm,
    appBiography: BiographyForm,
    appDeleteAccount: DeleteAccount
  },
  methods: {
    getUserData() {
      api.currentUser.getBasic().then(res => {
        const resData = res.data;
        this.demographics = {
          firstName: resData.firstName,
          lastName: resData.lastName,
          email: resData.email,
          zipCode: resData.zipCode,
          jobTitle: resData.jobTitle || "",
          jobCompany: resData.jobCompany || ""
        };
        this.interests = resData.interests || [];
        this.biography = resData.bio || "";
        this.userId = resData._id;
      });
    },
    updateDemographicsDisplay(updatedDemo) {
      console.log("Account: updating");
      this.demographics = updatedDemo;
      this.editDemographics = false;
    },
    updateInterestsDisplay(updatedInterests) {
      this.interests = updatedInterests;
      this.editInterests = false;
    },
    updateBioDisplay(updatedBio) {
      this.biography = updatedBio;
      this.editBio = false;
    }
  },
  created() {
    this.getUserData();
    console.log("Account: created(): ", this.image);
  },
  beforeCreate() {}
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
  box-shadow: none;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f39121;
}
#account-management::-webkit-scrollbar {
  width: 15px;
  background-color: #f39121;
}
#account-management::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: none;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(61, 192, 236);
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
@media (min-width: 1281px) and (max-width: 1600px) {
  .edit-img-container {
    height: 125px;
    width: 125px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
}
/* Laptops, Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .edit-img-container {
    height: 125px;
    width: 125px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 6% 0 5% 0;
  }
}
/* Tablets, Ipads (portrait) */
@media (min-width: 768px) and (max-width: 1024px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 8% 0 5% 0;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/* Tablets, Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 8% 0 5% 0;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/* Low Resolution Tablets, Mobiles (Landscape) */
@media (min-width: 481px) and (max-width: 767px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
    left: 15%;
  }
  #account-management {
    padding: 15% 0 5% 0;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/* Most of the Smartphones Mobiles (Portrait) */
@media (min-width: 319px) and (max-width: 480px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
    left: 20% !important;
  }
  #account-management {
    padding: 30% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*galaxy s5*/
@media (width: 360px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 30% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*pixel 2*/
@media (width: 411px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 30% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*iphone 5SE*/
@media (width: 320px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 30% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*iphone 6/7/8*/
@media (width: 375px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
    left: 15% !important;
  }
  #account-management {
    padding: 30% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*iphone 6/7/8 Plus*/
@media (width: 414px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
    left: 15% !important;
  }
  #account-management {
    padding: 20% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*iphone X*/
@media (width: 375px) {
  .edit-img-container {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
  #account-management {
    padding: 25% 0 5% 0;
    overflow-x: hidden;
  }
  .section-wrapper {
    width: 100%;
    margin: 10%;
    background-color: white;
    border-radius: 20px;
  }
  #account-management::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
/*iPad pro*/
@media (width: 1024px) {
  .edit-img-container {
    height: 150px;
    width: 150px;
    border: 5px solid rgb(236, 239, 241);
    top: 3%;
  }
}
</style>

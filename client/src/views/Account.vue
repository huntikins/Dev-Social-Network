<template>
  <div>
    <app-boomerang/>
    <div id="account-management" class="container">
      <section class="row">
        <div id="demographic-info" v-if="editDemographics">
          <p>{{user.firstname + user.lastname}}</p>
          <p>{{user.email}}</p>
          <p>{{user.zipcode}}</p>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
// import API from "./utils";
import Boomerang from "@/components/profile/Boomerang";

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
    appBoomerang: Boomerang
  }
};
</script>

<style>
</style>

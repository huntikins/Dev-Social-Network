<template>
  <div id="root">
    <form id="demo-form">
      <h4>Demographics</h4>
      <div class="form-row">
        <div class="form-group name-div col">
          <label for="first-name">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Gary"
            v-model="demographics.firstName"
            v-validate="'required'"
            name="first-name"
            :disabled="isGuest"
          >
          <small v-if="errors.first('first-name')" class="account-form-error">First name is required.</small>
        </div>
        <div class="form-group name-div col">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Gygax"
            v-model="demographics.lastName"
            v-validate="'required'"
            name="last-name"
            :disabled="isGuest"
          >
          <small v-if="errors.first('last-name')" class="account-form-error">Last name is required.</small>
        </div>
      </div>
      <!-- <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="youremail@gmail.com"
          v-model="demographics.email"
        >
      </div> -->
      <div class="form-group">
        <label for="zip-code">Zip Code</label>
        <input
          type="text"
          class="form-control"
          id="zip-code"
          placeholder="55555"
          v-validate="'required|numeric|digits:5'"
          v-model="demographics.zipCode"
          name="zipcode"
        >
        <small v-if="errors.first('zipcode')" class="account-form-error">A 5 digit zipcode is required.</small>
      </div>
      <div class="form-group">
        <label for="job-title">Job Title</label>
        <input
          type="text"
          class="form-control"
          id="job-title"
          placeholder="Badass"
          v-model="demographics.jobTitle"
        >
      </div>
      <div class="form-group">
        <label for="job-company">Job Company</label>
        <input
          type="text"
          class="form-control"
          id="job-company"
          placeholder="Code Company"
          v-model="demographics.jobCompany"
        >
      </div>
      <button class="btn save-button" @click.prevent="submitForm()" :disabled="errors.any()">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>

<script>
import API from "@/utils/userData";
import api from '../../utils/api.js';

export default {
  props: ["demInfo", 'isGuest'],
  data() {
    return {
      demographics: {
        firstName: this.$props.demInfo.firstName,
        lastName: this.$props.demInfo.lastName,
        jobTitle: this.$props.demInfo.jobTitle,
        jobCompany: this.$props.demInfo.jobCompany,
        zipCode: this.$props.demInfo.zipCode,
        email: this.$props.demInfo.email
      }
    };
  },
  methods: {
    submitForm() {
      this.demographics.jobTitle = this.demographics.jobTitle || '';
      this.demographics.jobCompany = this.demographics.jobCompany || '';
      api.currentUser.updateInfo(this.demographics)
        .then(res => {
          if (res.data.nModified === 1) {
            this.$emit('update-demographics', this.demographics);
          }
          else this.$emit('close');
        });
    }
  }
};
</script>

<style>
#demo-form {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
}

.name-div {
  max-width: 48%;
  margin: 0.25rem;
}

.save-button {
  border-radius: 100% !important;
  background-color: slategray !important;
  color: rgb(236, 239, 241);
  position: absolute;
  top: 102%;
  left: 99%;
}

.save-floppy {
  color: rgb(236, 239, 241);
}
</style>

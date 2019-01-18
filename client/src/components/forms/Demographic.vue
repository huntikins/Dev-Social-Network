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
            :value="demographics.firstName"
          >
        </div>
        <div class="form-group name-div col">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Gygax"
            :value="demographics.lastName"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="youremail@gmail.com"
          :value="demographics.email"
        >
      </div>
      <div class="form-group">
        <label for="zip-code">Zip Code</label>
        <input
          type="text"
          class="form-control"
          id="zip-code"
          placeholder="55555"
          :value="demographics.zipCode"
        >
      </div>
      <div class="form-group">
        <label for="job">Job</label>
        <input
          type="text"
          class="form-control"
          id="job"
          placeholder="Badass"
          :value="demographics.job"
        >
      </div>
      <button class="btn save-button" @click="editBio = false">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>

<script>
import API from "@/utils/userData";

export default {
  props: ["demographics"],
  data() {
    return {
      demographics: {
        firstName: this.$props.demographics.firstName,
        lastName: this.$props.demographics.lastName,
        email: this.$props.demographics.email,
        job: this.$props.demographics.job,
        zipCode: this.$props.demographics.zipCode
      }
    };
  },
  methods: {
    putDemo(id, demo) {
      API.putDemo(id, bio)
        .then()
        .catch();
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

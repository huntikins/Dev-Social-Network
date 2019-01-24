<template>
  <div id="root">
    <form id="interests-form">
      <div class="form-group">
        <label for="interest-list">
          <h4>Interests</h4>
        </label>
        <textarea
          class="form-control"
          name="interests"
          id="interest-list"
          rows="6"
          placeholder="Comma Separated List"
          :interests="interest"
        ></textarea>
      </div>
      <button class="btn save-button" @click="putInterests() && $emit('save-inter')">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>


<script>
import API from "@/utils/userData";

export default {
  props: ["interests"],
  data() {
    return {
      interests: this.$props.interests.interests.toString()
    };
  },
  methods: {
    putInterests(currentID, interests) {
      API.putInterests();
    }
  }
};
</script>

<style>
#interests-form {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
}
</style>

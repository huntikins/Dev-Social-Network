<template>
  <div id="root">
    <form id="biography-form">
      <div class="form-group">
        <label for="interest-list">
          <h4>Biography</h4>
        </label>
        <textarea
          :value="biography"
          class="form-control"
          name="biography"
          id="interest-list"
          rows="6"
        >Your Story</textarea>
      </div>
      <button class="btn save-button" @click="editBio = true">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>


<script>
import API from "@/utils/userData";

export default {
  props: ["biography"],
  data() {
    return {
      biography: this.$props.biography.biography
    };
  },
  methods: {
    putBio(id, bio) {
      API.putBio(id, bio)
        .then()
        .catch();
    }
  }
};
</script>

<style>
#biography-form {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
}
</style>

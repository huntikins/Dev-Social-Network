<template>
  <div id="root">
    <form id="biography-form">
      <div class="form-group">
        <label for="interest-list">
          <h4>Biography</h4>
        </label>
        <textarea
          v-model="text"
          class="form-control"
          name="biography"
          id="interest-list"
          rows="6"
        >Your Story</textarea>
      </div>
      <button class="btn save-button" @click.prevent="submit">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>


<script>
// import API from "@/utils/userData";
import api from '../../utils/api.js';

export default {
  props: ["biography"],
  data() {
    return {
      text: this.$props.biography
    };
  },
  methods: {
    submit() {
      const newBio = this.text;
      api.currentUser.updateInfo({ bio: newBio })
        .then(res => {
          console.log(res);
          if (res.data.nModified === 1) this.$emit('update', newBio);
          else this.$emit('close');
        });
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

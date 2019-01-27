<template>
  <div id="root">
    <form id="interests-form">
      <div class="form-group">
        <label for="interest-list">
          <h4>Interests</h4>
          <!-- <small>(Must be a comma separated list.)</small> -->
        </label>
        <textarea
          class="form-control"
          name="interests"
          id="interest-list"
          rows="6"
          placeholder="Comma Separated List"
          v-model="text"
        ></textarea>
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
  props: ["interests"],
  data() {
    return {
      text: this.stringify(this.$props.interests)
    };
  },
  methods: {
    stringify(array) {
      console.log('test')
      return array.join(', ');
    },
    arrayify(string) {
      const array = string.split(',').map(subString => subString.trim());
      const cleanedArray = [];
      array.forEach(el => (el !== '' && cleanedArray.indexOf(el) < 0) ? cleanedArray.push(el) : null);
      return cleanedArray;
    },
    submit() {
      const updatedInterests = this.arrayify(this.text);
      api.currentUser.updateInfo({ interests: updatedInterests })
        .then(res => {
          if (res.data.nModified === 1) {
            this.$emit('update-interests', updatedInterests);
          }
          else this.$emit('close');
        });
    }
  },
  mounted() {
    console.log('mounted')
    console.log(this.text)
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

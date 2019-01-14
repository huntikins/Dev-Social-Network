<template>
  <div id="root">
    <form id="demo-form">
        <h4>Demographics</h4>
      <div class="form-row">
        <div class="form-group name-div col">
          <label for="first-name">First Name</label>
          <input type="text" class="form-control" id="first-name" placeholder="Gary">
        </div>
        <div class="form-group name-div col">
          <label for="last-name">Last Name</label>
          <input type="text" class="form-control" id="last-name" placeholder="Gygax">
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="youremail@gmail.com">
      </div>
      <div class="form-group">
        <label for="zip-code">Zip Code</label>
        <input type="text" class="form-control" id="zip-code" placeholder="55555">
      </div>
      <button class="btn save-button" @click="editBio = false">
        <i class="fas fa-save save-floppy"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
#demo-form{
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

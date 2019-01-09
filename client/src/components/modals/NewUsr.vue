<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container-newusr">
          <span class="modal-close" @click="$emit('close')"><i class="fas fa-times"></i></span>
          <div class="modal-header m-0 p-0">
            <img class="modal-image m-auto p-0" src="@/assets/logo-brain.svg" alt="cerebellum">
          </div>
          <div class="modal-body m-0 p-0">
            <h1 class="home-header m-auto py-4">TELL US A LITTLE ABOUT YOURSELF</h1>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6 col-sm-12">
                  <input type="text" class="form-control modal-field" placeholder="first name">
                </div>
                <div class="form-group col-md-6 col-sm-12">
                  <input type="text" class="form-control modal-field" placeholder="last name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12">
                  <input type="email" class="form-control modal-field" placeholder="email">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-9 col-lg-8 col-sm-12">
                  <input type="password" class="form-control modal-field" placeholder="password">
                </div>
                <div class="form-row col-md-3 col-lg-4 col-sm-12">
                  <input type="text" class="form-control modal-field" placeholder="zipcode">
                </div>
              </div>
            </form>
            <small class="home-body">your privacy is important, we will never share or sell any information provided to us.</small>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light modal-default-button">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
export default {

}
</script>

<style>
.modal-container-newusr{
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #859595 !important;
  border-radius: 25px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: roboto, sans-serif;
}
</style>

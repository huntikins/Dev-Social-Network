<template>
  <transition name="modal">
    <app-loading v-if="load"/>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container-newusr">
          <span class="modal-close" @click="$emit('close')"><i class="fas fa-times"></i></span>
          <div class="modal-header m-0 p-0">
            <img class="modal-image m-auto p-0" src="@/assets/logo-brain.svg" alt="cerebellum">
          </div>
          <div class="modal-body m-0 p-0">
            <h1 class="home-header m-auto py-4">TELL US A LITTLE ABOUT YOURSELF</h1>
            <form id="new-user-form">
              <div class="form-row">
                <div class="form-group col-md-6 col-sm-12">
                  <input v-validate="'required|min:2'" v-model="newUser.firstName" name="first name" type="text" class="form-control modal-field" placeholder="first name">
                  <small class="home-body">{{ errors.first('first name') }}</small>
                </div>
                <div class="form-group col-md-6 col-sm-12">
                  <input v-validate="'required|min:2'" v-model="newUser.lastName" name="last name" type="text" class="form-control modal-field" placeholder="last name">
                  <small class="home-body">{{ errors.first('last name') }}</small>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12">
                  <input v-validate="'required|email'" v-model="newUser.email" name="email" type="email" class="form-control modal-field" placeholder="email">
                  <small class="home-body">{{ errors.first('email') }}</small>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-9 col-lg-8 col-sm-12">
                  <input v-validate="'required|min:8'" v-model="newUser.password" name="password" type="password" class="form-control modal-field" placeholder="password">
                  <small class="home-body">{{ errors.first('password') }}</small>
                </div>
                <div class="form-row col-md-3 col-lg-4 col-sm-12">
                  <input v-validate="'required|numeric|digits:5'" v-model="newUser.zipCode" name="zipcode" type="text" class="form-control modal-field" placeholder="zipcode">
                  <small class="home-body">{{ errors.first('zipcode') }}</small>
                </div>
              </div>
            </form>
            <small class="home-body">{{ message }}</small>
          </div>
          <div class="modal-footer mt-4 pt-4">
            <button class="btn btn-light modal-default-button" @click.prevent="createAccount" :disabled="errors.any() || isEmpty" type="submit" form="new-user-form">LOGIN</button>
          </div>
          <div class="mt-4 pt-4">
            <small class="home-body">Your privacy is important, we will never share or sell any information provided to us.</small>
          </div>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
import api from '../../utils/auth.js';
import Loading from '@/components/modals/Loading'
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zipCode: ''
      },
      message: '',
      load: false
    }
  },
  components: {
    appLoading: Loading
  },
  methods: {
    createAccount() {
      const self = this;
      api.createAccount(this.newUser)
        .then(res => {
          if (res.data.success){
            self.load = true
            self.$router.push('/profile');
          } 
          self.message = res.data.message;
      });
      setTimeout(function(){
        this.load = false
      }, 3000)
    }
  },
  computed: {
    isEmpty() {
      return !this.newUser.email || !this.newUser.password || !this.newUser.firstName || !this.newUser.lastName || !this.newUser.zipCode;
    }
  }
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

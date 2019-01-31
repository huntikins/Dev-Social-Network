<template>
    <div class="reset-page">
        <div class="container mt-4">
            <div class="text-center mt-4">
                <img class="reset-logo mt-4" src="@/assets/logo-brain.svg" alt="cerebellum">
            </div>
            <div class="reset-title mt-4">
                <h1 class="reset-title-text mt-4">reset password</h1>
            </div>
            <form class="reset-form" id="reset-form">
                <div class="form-row">
                    <div class=" form-group col-6 mx-auto my-4 text-center">
                        <input v-validate="'required|min:8'" type="password" name="password" placeholder="create new password" v-model="password" class="form-control reset-password-field">
                        <small class="home-body">{{ errors.first('password') }}</small>
                        <p class="home-body">{{ message }}</p>
                        <p class="home-body">{{ countdown }}</p>
                    </div>
                </div>
            </form>
            <div class="sumbit-reset text-center my-4">
                <button class="btn btn-light modal-default-button" @click.prevent="resetPassword" :disabled="errors.any() || isEmpty" type="submit" form="reset-form">RESET</button>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../utils/api';
export default {
    props: ['token'],
    data(){
        return{
            password: '',
            message: '',
            countdown: ''
        }
    },
    computed: {
        isEmpty() {
            return !this.password;
        }
    },
    methods: {
        resetPassword(){
            console.log('wtf')
            api.auth.resetPassword(this.$props.token, this.password)
                .then(res => {
                    if (res.data.success) {
                        this.message = "Your password has been reset. You will be redirected in a few seconds.";
                        this.countdown = 6;
                        const intervalId = setInterval(() => {
                            this.countdown--;
                            if (this.countdown === 0) {
                                this.$router.push('/social');
                            }
                        }, 1000);
                    }
                    else {
                        this.message = "Your token is invalid or expired. Please request another token.";
                    }
                })
        }
    },
}
</script>

<style>
.reset-page{
    background-color: #859595;
}
.reset-logo{
    width: 15%;
}
.reset-title-text {
    color: white;
    font-family: alternate-gothic-no-1-d, sans-serif;
    text-align: center;
    font-size: 6em;
}
input.reset-password-field{
    background-color: rgb(133,149,149);
    border: 1px solid #ffffff;
    border-radius: 100px;
    text-align: center;
    color: white;
    font-family: roboto, sans-serif;
}
input.reset-password-field::placeholder {
  color: white !important;
  text-align: center;
  font-family: roboto, sans-serif;
}
input.reset-password-field:focus::placeholder {
  opacity: 0;
}
input.reset-password-field:focus {
  background-color: white;
  text-align: center;
  color: black;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  font-family: roboto, sans-serif;
}
</style>

<template>
    <div class="reset-page">
        <div class="container mt-4">
            <div class="text-center">
                <img class="reset-logo" src="@/assets/logo-brain.svg" alt="cerebellum">
            </div>
            <div class="reset-title mt-4">
                <h1 class="reset-title-text mt-4">reset password</h1>
            </div>
            <div class="reset-form">
                <div class="form-group">
                    <input type="password" placeholder="create new password" v-model="password" class="form-control reset-password-field">
                </div>
            </div>
            <div class="sumbit-reset-">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            password: ''
        }
    }
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

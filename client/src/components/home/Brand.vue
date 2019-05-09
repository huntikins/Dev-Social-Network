<template>
    <div class="col col-offset-4 text-center img-wrapper">
        <img class="text-logo" src="@/assets/logo-home.png" alt=""> 
        <button
            :class="`btn btn-light button-join${isGuest ? '' : ' hvr-float-shadow'}`"
            @click="openCreateAccountModal"
        >
            JOIN US
        </button>
        <app-join v-if="join" @close="join = false"/>
        <button
            :class="`btn btn-light button-login hvr-float-shadow${
                isLoginBtnActive ?
                    isLoginBtnFocus ? ' active focus' : ' active'
                    :
                    ''
            }`"
            @click="openLoginModal"
        >
            LOGIN
        </button>
        <app-login v-if="login" @close="login = false" :isGuest="isGuest" />
    </div>
</template>

<script>
import Login from '@/components/modals/Login'
import Join from '@/components/modals/NewUsr'
export default {
    props: ['isGuest'],
    data(){
        return {
            login: false,
            join: false,
            isLoginBtnActive: false,
            isLoginBtnFocus: false
        }
    },
    components: {
        appLogin: Login,
        appJoin: Join
    },
    methods: {
        openCreateAccountModal() {
            return this.$props.isGuest ? null : this.join = true;
        },
        openLoginModal() {
            return this.$props.isGuest ? null : this.login = true;
        }
    },
    mounted() {
        if (!this.$props.isGuest) return null;
        setTimeout(() => {
            this.isLoginBtnActive = true;
            setTimeout(() => {
                this.isLoginBtnFocus = true;
                setTimeout(() => {
                    this.login = true;
                }, 600);
            }, 700);
        }, 700);
    }
}
</script>

<style>
.text-logo {
    height: 250px !important;
}
.img-wrapper {
    position: relative;
    cursor:default;
    z-index: 3;
    top: -60px;
}
.button-join {
    z-index: 4;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background: white;
    border-radius: 100px !important;
    color: black;
    font-family: roboto, sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 100;
    /* left: 35%; */
    left: calc(50% - 20px - 150px);
    top: 70%;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
.button-login {
    z-index: 3;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background: white;
    border-radius: 100px !important;
    color: black;
    font-family: roboto, sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 100;
    /* left: 52%; */
    left: calc(50% + 20px);
    top: 70%;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
/*css button transition modified from: https://github.com/IanLunn/Hover*/
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active,
.hvr-float-shadow.active, .hvr-float-shadow.focus {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before,
.hvr-float-shadow.active:before, .hvr-float-shadow.focus:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>

<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <span class="modal-close" @click="$emit('close')"><i class="fas fa-times"></i></span>
          <div class="modal-header">
            <h3>Content goes here</h3>
          </div>
          <div class="modal-body">
            <h3>Content goes here</h3>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light modal-default-button">OK</button>
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #859595 !important;
  border-radius: 25px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: roboto, sans-serif;
}

.modal-header {
  margin-top: 0;
  border: none !important;
}
.modal-footer {
  border: none !important;
}
.modal-body {
  margin: 20px 0;
  border: none !important;
}

.modal-default-button {
    margin: auto;
    width: 150px;
    height: 40px;
    background: white;
    border-radius: 100px !important;
    color: black;
    font-family: alternate-gothic-no-1-d, sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 100;
}
.modal-enter {
  opacity: 0;
}
.modal-close {
  float: right;
  color: white;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

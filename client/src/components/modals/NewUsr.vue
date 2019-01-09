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

</style>

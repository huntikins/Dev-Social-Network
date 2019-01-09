<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3>Content goes here</h3>
          </div>
          <div class="modal-body">
            <h3>Content goes here</h3>
          </div>
          <div class="modal-footer">
            <h3>Content goes here</h3>
            <button class="modal-default-button" @click="$emit('close')">OK</button>
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

<template>
  <div
    class="snackbar"
    v-show="isShow"
  >
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VSnackBar',
  props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="triangle" :style="styles" @click="$emit('click')">
    <div class="triangle__inner" :style="innerStyles"></div>
  </div>
</template>
<script>
export default {
  props: {
    down: Boolean,
    up: Boolean,
  },

  computed: {
    innerStyles() {
      if (!!this.up) {
        return {
          'border-bottom': '7px solid',
          'margin-top': '-5px',
        }
      } else {
        return {
          'border-top': '7px solid',
          'margin-top': '-15px',
        }
      }
    },
    styles() {
      if (!!this.up) {
        return {
          'border-bottom': '15px solid',
          'top': '10px'
        }
      } else {
        return {
          'border-top': '15px solid #d32f2f',
          'bottom': '10px'
        }
      }
    },
  },
}
</script>
<style scoped>
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  color: #d32f2f;
  cursor: pointer;
}

.triangle:hover {
  color: #e07070;
}

.triangle__inner {
  margin-left: -14px;
  border: 14px solid transparent;
    color: white;
}
</style>

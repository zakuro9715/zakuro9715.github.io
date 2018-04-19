<template>
  <div @click="navigate">
    <div class="triangle" :style="styles">
      <div class="triangle__inner" :style="innerStyles"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    down: Boolean,
    up: Boolean,
    name: String,
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
  methods: {
    navigate() {
      this.$router.push({ name: this.name })
    },
  },
  mounted() {
    document.addEventListener("wheel", (e) => {
      if (!!this.up && e.deltaY < 0 || !this.up && e.deltaY > 0) {
        this.navigate()
      }
    })
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
  margin-left: -30px;
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

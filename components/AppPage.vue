<template>
  <div class="page" @wheel.once="wheel">
    <div class="container">
      <navi-arrow v-if="prev" up :name="prev" @click="goPrev" />
      <slot></slot>
      <navi-arrow v-if="next" down :name="next" @click="goNext" />
    </div>
  </div>
</template>

<script>
import NaviArrow from '@/components/NaviArrow.vue'

export default {
  props: {
    prev: {
      type: String,
      default: null,
    },
    next: {
      type: String,
      default: null,
    }
  },
  components: { NaviArrow },
  methods: {
    goPrev() {
      this.$router.push({ name: this.prev })
    },
    goNext() {
      this.$router.push({ name: this.next })
    },
    wheel(e) {
      if (this.prev && e.deltaY < 0) {
        this.goPrev()
      } else if(this.next && e.deltaY > 0) {
        this.goNext()
      }
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.page {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

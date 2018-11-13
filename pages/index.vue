<template>
  <app-page next="profile">
      <app-logo/>
      <h1 class="title">z@kuro</h1>
      <p class="description">Art &amp; Technology</p>
  </app-page>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppPage from '~/components/AppPage.vue'
import NaviArrow from '~/components/NaviArrow.vue'
import { slideTransition } from '~/assets/transition'

export default {
  transition: slideTransition,
  components: {
    AppPage, AppLogo, NaviArrow,
  },
  methods: {
    navigateDown() {
      this.$router.push({ name: 'profile' })
    }
  },
}
</script>

<style scoped>

.hero {
  padding: 80px 0;
}
.first-view {
  min-height: 100vh;
}

.title {
  display: block;
  font-weight: 500;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 10px 0 10px 0;
}

</style>

<template>
  <app-page prev="profile" next="history">
      <section class="section">
        <h2 class="section__title">Job History</h2>
        <section class="subssection">
          <h3 class="section__subtitle">TwoGate inc.</h3>
          <p class="section__description">Fullstack Web Enginneer</p>
          <p class="section__description">TypeScript / JavaSript / Ruby / HTML / CSS / SCSS</p>
          <p class="section__description">Rails / Vue / Angular / Ionic</p>
        </section>
        <section class="subsection">
        <h3 class="section__subtitle">MisingLink inc.</h3>
        <p class="section__description">Web Enginneer</p>
        <p class="section__description">JavaSript / Ruby / HTML / CSS / SCSS</p>
        <p class="section__description">Rails / Vue</p>
        </section>
        <section class="subsection">
        <h3 class="section__subtitle">Wantedly inc.</h3>
        <p class="section__description">Internship in the infrastructure team</p>
        <p class="section__description">Ruby</p>
        <p class="section__description">Rails / Docker / Mecab</p>
        </section>
      </section>
  </app-page>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppPage from '~/components/AppPage.vue'
import { slideTransition } from '~/assets/transition'

export default {
  transition: slideTransition,
  components: {
    AppPage, AppLogo,
  },
}
</script>

<style scoped>
.section__title {
  display: block;
  font-weight: 800;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
  padding: 10px 0;
}

.section__subtitle {
  display: block;
  padding: 8px 0 0 0;
}

.section__description {
  padding: 3px 0;
}

.subsection {
  padding: 10px 0;
}
</style>

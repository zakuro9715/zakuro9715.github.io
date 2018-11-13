<template>
  <app-page>
      <navi-arrow up name="index"></navi-arrow>
      <section class="section">
        <h2 class="section__title">Accouns</h2>
        <a
            href="https://twitter.com/zakuro9715"
            target="_blank"
            class="button--color">Twitter</a>
        <a
            href="https://github.com/zakuro9715"
            target="_blank"
            class="button--color">GitHub</a>
        <a
            href="https://soundcloud.com/zakuro9715"
            target="_blank"
            class="button--color">SoundCloud</a>
        <a
            href="https://note.mu/zakuro9715"
            target="_blank"
            class="button--color">Note</a>
      </section>
      <section class="section">
        <h2 class="section__title">Skills</h2>
        <h3 class="section__subtitle">3D Animation</h3>
        <p class="section__description">Maya</p>
        <h3 class="section__subtitle">Programming</h3>
        <p class="section__description">Fullstack web.</p>
        <p class="section__description">Rails, Django, Vue, Angular and etc... </p>
        <p class="section__description">Ruby, Python, JavaScript, TypeScript, Go, C++, C# and etc...</p>
      </section>
      <navi-arrow down name="job"></navi-arrow>
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

.section {
  padding: 30px 0;
}
</style>

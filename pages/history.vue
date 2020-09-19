<template>
  <app-page prev="job">
    <section class="section">
      <h2 class="section__title">Contests</h2>
      <h3 class="section__subtitle">日本情報オリンピック 2013-2014 本選 B ランク</h3>
      <h3 class="section__subtitle">日本情報オリンピック 2012-2013 本選出場</h3>
      <h3 class="section__subtitle">SupercomputingContest2013 本戦13位</h3>
      <h3 class="section__subtitle">パソコン甲子園2014　もう一つの本選 7位</h3>
    </section>
    <section class="section">
      <h2 class="section__title">Certifications</h2>
      <h3 class="section__subtitle">情報セキュリティスペシャリスト試験</h3>
      <h3 class="section__subtitle">応用情報技術者試験</h3>
      <h3 class="section__subtitle">基本情報技術者試験</h3>
    </section>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import { slideTransition } from '~/assets/transition'

export default {
  transition: slideTransition,
  components: {
    AppPage
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

<template>
  <div class="page">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

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

<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosansjp.css);

html {
  font-family: "Noto Sans CJK JP", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #35495e;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--color {
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  background-color: #d32f2f;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px;
}

.button--color:hover {
  color: #fff;
  background-color: #e07070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
}
</style>

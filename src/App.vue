<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body, p, dl, dd, ul, ol, li, div, h1, h2, h3, h4, h5, h6, form, input, table, tr, td, input, a {
    margin: 0;
    padding: 0;
  }

    html, body {
    font: 26.67vw "微软雅黑", Arial; }

    ul, ol, li {
    list-style: none; }

    img {
    border: 0;
    display: block; }

    a {
    text-decoration: none;
    color: #333; }

    .clearfix::after {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0; }

    .clearfix {
    zoom: 1; }
    
</style>

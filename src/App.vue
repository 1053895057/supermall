<template>
  
  <div id="app">
    <MainTabbar></MainTabbar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import MainTabbar from './components/contents/mainTabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>

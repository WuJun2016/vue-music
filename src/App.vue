<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-tab': Tab
  }
}
</script>

<style>
</style>

<template>
<div>
  <router-link v-for="(item, idx) in list" :key="idx" :to="item.path">{{item.name}}</router-link>
</div>
</template>
<script>
import routerList from './router.js'

export default {
  data () {
    return {
      list: routerList
    }
  }
}
</script>
<style>
</style>

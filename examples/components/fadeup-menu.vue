<template>
<div>
  <button @click="isShowMenu = true">显示菜单</button>
  <fadeup-menu :is-show.sync="isShowMenu">
    <div class="menu-li">菜单一</div>
    <div class="menu-li">菜单二</div>
    <div class="menu-li">菜单三</div>
    <div class="menu-li">菜单四</div>
  </fadeup-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      isShowMenu: false
    }
  }
}
</script>

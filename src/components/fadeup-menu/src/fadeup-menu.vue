<template>
<transition name="fademenu">
  <div class="cover" v-if="isShow">
    <div class="mask" @touchmove.prevent="stopScroll" @click.stop="close"></div>
    <div class="menu">
      <slot></slot>
      <div class="menu-li cancel" @click.stop="close">取消</div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'fadeupMenu',
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    stopScroll() {
      event.preventDefault()
    },
    close() {
      this.$emit('update:isShow', false)
    }
  }
}
</script>
<style scoped>
.fademenu-enter-active {
  transition-duration: .4s;
}
.fademenu-enter-active .mask {
  transition: opacity .4s;
}
.fademenu-enter-active .menu {
  transition: transform .4s;
}
.fademenu-leave-active {
  transition-duration: .2s;
}
.fademenu-leave-active .mask {
  transition: opacity .2s;
}
.fademenu-leave-active .menu {
  transition: transform .2s;
}
.fademenu-enter .mask, 
.fademenu-leave-to .mask {
  opacity: 0;
}
.fademenu-enter .menu,
.fademenu-leave-to .menu {
  transform: translateY(100%);
}
.cover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.mask {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000;
}
.menu {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  color: #333;
  white-space: nowrap;
  background-color: #fff;
}
.menu >>> .menu-li {
  display: block;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  text-decoration: none;
  text-overflow: ellipsis;
  color: #333;
}
.menu >>> .menu-li:last-child {
  border-bottom: none;
}
.menu .menu-li.cancel {
  border-top: 7px solid #f2f2f2;
}
</style>

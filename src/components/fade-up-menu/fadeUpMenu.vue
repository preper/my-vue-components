<template lang="pug">
transition(name="fademenu")
  .cover(v-if="isShow")
    .mask(@touchmove.prevent="stopScroll", @click.stop="close")
    .menu
      slot
      .menu-li.cancel(@click.stop="close") 取消
</template>
<script>
export default {
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
<style lang="stylus" scoped>
.fademenu-enter-active
  transition-duration: .4s
  .mask
    transition: opacity .4s
  .menu
    transition: transform .4s
.fademenu-leave-active
  transition-duration: .2s
  .mask
    transition: opacity .2s
  .menu
    transition: transform .2s
.fademenu-enter
.fademenu-leave-to
  .mask
    opacity: 0
  .menu
    transform: translateY(100%)
.cover
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 10
.mask
  width: 100%
  height: 100%
  opacity: 0.5
  background-color: #000
.menu
  position: absolute
  bottom: 0
  width: 100%
  font-size: 18px
  line-height: 50px
  text-align: center
  color: #333
  white-space: nowrap
  background-color: #fff
  >>> .menu-li
    display: block
    overflow: hidden
    position: relative
    border-bottom: 1px solid #f2f2f2
    text-decoration: none
    text-overflow: ellipsis
    color: #333
    &:last-child
      border-bottom: none
    &.cancel
      border-top: 7px solid #f2f2f2
</style>

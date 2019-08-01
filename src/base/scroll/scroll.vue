<template>
  <div ref="wrapperScroll">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapperScroll) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapperScroll, {
        probeType: this.probeType,
        click: this.click
      })
    },
    refresh () {
      this.scroll.refresh()
    },
    disable () {
      this.scroll.disable()
    }
  }
}
</script>
<style lang="stylus"></style>

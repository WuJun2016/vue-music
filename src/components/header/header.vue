<template>
  <div id="header">
    <div class="icon"></div>
    <div class="name">Chicken Music</div>
    <router-link tag="div" to="/user" class="mine">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  @import "~common/stylus/mixin"

  #header {
    display flex
    position relative
    height 44px
    justify-content center
    align-items center
    color: $color-theme
    .icon {
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    }
    .name {
      line-height: 44px
      font-size: $font-size-large
    }

    .mine {
      position: absolute
      top: 0
      right: 0

      .icon-mine {
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
      }
    }

  }
</style>

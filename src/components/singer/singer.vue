<template>
  <div id="singer">
    singer
  </div>
</template>
<script>
import { getSingerList } from '@/api/singer'
import Singer from '@/common/js/singer'
import { ERR_OK } from '@/api/config'

const HOT_NAME = '热门'
const HOT_SINGER_LIN = 10

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this._normalizeSinger(this.singers))
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }

      list.forEach((item, index) => {
        const id = item.Fsinger_mid
        const name = item.Fsinger_name
        if (index < HOT_SINGER_LIN) {
          map.hot.items.push(new Singer(id, name))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer(id, name))
      })
      return map
    }
  }
}
</script>
<style lang="stylus">

</style>

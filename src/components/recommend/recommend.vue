<template>
  <div id="recommend">
    <v-scroll class="recommend-content">
      <div>
        <div class="slider-wrapper" v-if="recommends.length">
          <v-slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="推荐项图片" />
              </a>
            </div>
          </v-slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,index) in discList" :key="index" class="item">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60" alt />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <v-loading></v-loading>
      </div>
    </v-scroll>
  </div>
</template>
<script>
import { getRecommend, getDiscList } from 'api/recommend'
import Slider from '@/base/slider/slider'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  components: {
    'v-slider': Slider,
    'v-scroll': Scroll,
    'v-loading': Loading
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.list)
          this.discList = res.data.list
        }
      })
    }
  }
}
</script>
<style lang="stylus">
@import '~common/stylus/variable';

#recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

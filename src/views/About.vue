<template>
  <div :style="scene">
    <img src="@/assets/1/bg.jpg" class="fixed-bg" />
    <ispy-poem :items="items" />
    <ispy-item
      v-for="(item, index) of items"
      :key="item.phrase"
      :id="index"
      :image="item.image"
      :x="item.x"
      :y="item.y"
      :scale="ratio"
      :animation="item.animation"
      :time="item.time"
      :clickable="canClick"
      @log-item="logItem($event)"
      @log-done="logDone"
    />
  </div>
</template>
<script>
import Item from '@/components/ispy-item.vue'
import Poem from '@/components/ispy-poem.vue'

export default {
  components: {
    'ispy-item': Item,
    'ispy-poem': Poem
  },
  data() {
    return {
      canClick: true,
      items: [
        {
          phrase: 'domo,',
          image: require('@/assets/1/domo.jpg'),
          x: 715,
          y: 356,
          animation: 'fadeIn',
          time: 1,
          found: false
        },
        {
          phrase: 'a star,',
          image: require('@/assets/1/star.png'),
          x: 1395,
          y: 890,
          animation: 'heartBeat',
          found: false
        },
        {
          phrase: 'pequeña',
          image: require('@/assets/1/pequena.png'),
          x: 174,
          y: 418,
          found: false
        }
      ]
    }
  },
  methods: {
    logItem(item) {
      if (this.canClick) {
        this.items[item].found = true
        this.canClick = false
      }
    },
    logDone() {
      this.canClick = true
    }
  },
  computed: {
    ratio() {
      let width = Math.min(1920, window.innerWidth)
      let height = Math.min(1080, window.innerHeight)
      let ratio = Math.min(width / 1920, height / 1080)
      return ratio
    },
    scene() {
      return {
        width: (1920 * this.ratio).toString(10) + 'px',
        height: (1080 * this.ratio).toString(10) + 'px',
        position: 'relative'
      }
    }
  }
}
</script>

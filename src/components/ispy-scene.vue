<template>
  <div :style="scene">
    <img :src="background" class="fixed-bg" />
    <ispy-poem :items="items" />
    <ispy-item
      :id="-1"
      :image="extra.image"
      :x="extra.x"
      :y="extra.y"
      :scale="ratio"
      animation="none"
    />
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
    <a href="/">Back</a>
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
  props: {
    background: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    extra: {
      type: Object,
      required: true
    },
    ratio: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      canClick: true
    }
  },
  methods: {
    logItem(item) {
      if (this.canClick) {
        this.$set(this.items[item], 'found', true)
        this.canClick = false
      }
    },
    logDone() {
      this.canClick = true
    }
  },
  computed: {
    scene() {
      return {
        width: 1920 * this.ratio.toString(10) + 'px',
        height: 1080 * this.ratio.toString(10) + 'px',
        position: 'relative'
      }
    }
  }
}
</script>
<style scoped>
a {
  position: fixed;
  top: 5%;
  left: 5%;
}
</style>

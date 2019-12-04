<template>
  <transition enter-active-class="animated fadeIn">
    <div v-show="showScene" :style="scene">
      <img :src="background" class="fixed-bg" />
      <ispy-poem v-if="showpoem" :items="items" />
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
        @has-load="loadDone"
      />
      <p class="router-link"><router-link to="/">Back</router-link></p>
    </div>
  </transition>
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
    },
    showpoem: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showScene: false,
      loaded: 0,
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
      let win = true
      for (let item of this.items) {
        if (!item.found) win = false
      }
      if (win) {
        this.$emit('win')
      }
    },
    loadDone() {
      this.loaded++
      if (this.loaded >= this.items.length) {
        this.showScene = true
      }
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
.router-link {
  position: fixed;
  top: 3%;
  left: 3%;
}
.router-link a {
  background-color: #ffffff77;
  padding: 1em;
  color: rgb(65, 100, 255);
  text-decoration: none;
}
.router-link a:hover {
  background-color: #ffdfdf77;
  color: #ff8888;
}
</style>

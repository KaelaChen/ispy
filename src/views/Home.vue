<template>
  <div :style="scene">
    <img src="@/assets/scene/bg.jpg" class="fixed-bg" />
    <router-link to="/kaleidoscope">
      <ispy-item
        key="kaleidoscope"
        :id="-2"
        :image="require('@/assets/scene/kal.jpg')"
        :x="883"
        :y="558"
        :scale="ratio"
        animation="fadeOut"
        hovery
      />
    </router-link>
    <router-link to="/school">
      <ispy-item
        key="school"
        :id="-3"
        :image="require('@/assets/scene/school.jpg')"
        :y="400"
        :scale="ratio"
        animation="fadeOut"
        hovery
      />
    </router-link>
    <router-link to="/trains">
      <ispy-item
        key="train"
        :id="-4"
        :image="require('@/assets/scene/train.png')"
        :x="1167"
        :y="511"
        :scale="ratio"
        animation="slideOutRight"
        :time="3"
        hovery
    /></router-link>
    <div class="poem" v-if="won"><p>You win</p></div>
  </div>
</template>

<script>
import Item from '@/components/ispy-item.vue'
export default {
  name: 'home',
  components: {
    'ispy-item': Item
  },
  props: {
    ratio: Number,
    wins: Object
  },
  computed: {
    scene() {
      return {
        width: 1920 * this.ratio.toString(10) + 'px',
        height: 1080 * this.ratio.toString(10) + 'px',
        position: 'relative',
        overflow: 'hidden'
      }
    },
    won() {
      if (this.wins.trains && this.wins.kal && this.wins.sch) {
        return true
      }
      return false
    }
  }
}
</script>

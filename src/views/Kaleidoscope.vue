<template>
  <ispy-scene
    :background="background"
    :items="items"
    :extra="extra"
    :ratio="ratio"
  >
  </ispy-scene>
</template>

<script>
// @ is an alias to /src
import Scene from '@/components/ispy-scene.vue'

export default {
  name: 'home',
  components: {
    'ispy-scene': Scene
  },
  props: {
    ratio: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      background: require('@/assets/kaleidoscope/bg.jpg'),
      extra: {
        image: require('@/assets/kaleidoscope/pot.png'),
        x: 712,
        y: 0
      },
      items: [
        {
          phrase: 'a paintbrush,',
          image: require('@/assets/kaleidoscope/paintbrush.png'),
          x: 1075,
          y: 419
        },
        {
          phrase: 'a button,',
          image: require('@/assets/kaleidoscope/button.png'),
          x: 1331,
          y: 222,
          found: false
        },
        {
          phrase: 'a duck,',
          image: require('@/assets/kaleidoscope/becky.png'),
          x: 0,
          y: 0,
          animation: 'fadeIn',
          time: 1,
          found: false
        },
        {
          phrase: 'a wooden train whistle,',
          image: require('@/assets/kaleidoscope/train_whistle.png'),
          x: 781,
          y: 555,
          found: false
        },
        {
          phrase: 'and a little toy truck.',
          image: require('@/assets/kaleidoscope/truck.png'),
          x: 1402,
          y: 902,
          found: false
        }
      ]
    }
  }
}
</script>

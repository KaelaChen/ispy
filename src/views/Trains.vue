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
      background: require('@/assets/trains/bg.jpg'),
      extra: {
        image: require('@/assets/trains/bowl.png'),
        x: 297,
        y: 276
      },
      items: [
        {
          phrase: 'a clock tower',
          image: require('@/assets/trains/clock_tower.png'),
          x: 1339,
          y: 157,
          found: false
        },
        {
          phrase: 'and a safety guard,',
          image: require('@/assets/trains/safety_guard.png'),
          x: 420,
          y: 158,
          animation: 'flash',
          found: false
        },
        {
          phrase: 'pipes,',
          image: require('@/assets/trains/pipe.png'),
          x: 505,
          y: 523,
          animation: 'fadeOut',
          time: 2,
          found: false
        },
        {
          phrase: 'an accident,',
          image: require('@/assets/trains/accident.png'),
          x: 433,
          y: 93,
          animation: 'shake',
          found: false
        },
        {
          phrase: 'and an ace card.',
          image: require('@/assets/trains/card.png'),
          x: 1097,
          y: 292,
          animation: 'flip',
          found: false
        }
      ]
    }
  }
}
</script>

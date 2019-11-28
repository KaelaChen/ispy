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
      background: require('@/assets/school/bg.jpg'),
      extra: {
        // chopstick
        image: require('@/assets/school/heart.png'),
        x: 0,
        y: -50
      },
      items: [
        {
          phrase: 'a kitten,',
          image: require('@/assets/school/cat.png'),
          x: 1144,
          y: 648
        },
        {
          phrase: 'a heart on a book,',
          image: require('@/assets/school/heart.png'),
          x: 791,
          y: 665,
          found: false
        },
        {
          phrase: 'EXPO,',
          image: require('@/assets/school/expo.png'),
          x: 395,
          y: 862,
          animation: 'fadeIn',
          time: 1,
          found: false
        },
        {
          phrase: 'a domo,',
          image: require('@/assets/school/domo.png'),
          x: 1576,
          y: 812,
          found: false
        },
        {
          phrase: 'and a moose on a hook.',
          image: require('@/assets/school/moose.png'),
          x: 1070,
          y: 0,
          found: false
        }
      ]
    }
  }
}
</script>

<template>
  <ispy-scene
    :background="background"
    :items="items"
    :extra="extra"
    :ratio="ratio"
    :showpoem="!wins.sch"
    @win="$emit('win', 'sch')"
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
    wins: {
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
          y: 648,
          animation: 'flash',
          found: false
        },
        {
          phrase: 'a heart on a book,',
          image: require('@/assets/school/heart.png'),
          x: 791,
          y: 665,
          animation: 'heartBeat',
          found: false
        },
        {
          phrase: 'EXPO,',
          image: require('@/assets/school/expo.png'),
          x: 395,
          y: 862,
          animation: 'wobble',
          time: 1,
          found: false
        },
        {
          phrase: 'a domo,',
          image: require('@/assets/school/domo.png'),
          x: 1576,
          y: 812,
          animation: 'jello',
          found: false
        },
        {
          phrase: 'and a moose on a hook.',
          image: require('@/assets/school/moose.png'),
          x: 1070,
          y: 0,
          animation: 'fadeIn',
          found: false
        }
      ]
    }
  }
}
</script>

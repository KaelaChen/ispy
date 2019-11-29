<template>
  <div :style="containerStyle">
    <img
      :id="image"
      :src="image"
      :class="animClass"
      :style="itemStyle"
      @click="foundItem"
      @mouseover="hoverAnim"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    animation: {
      type: String,
      default: 'fadeIn'
    },
    time: {
      type: Number,
      default: 2
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    jingle: {
      // likely unused
      type: String,
      default: ''
    },
    clickable: {
      type: Boolean,
      default: true
    },
    scale: {
      type: Number,
      default: 1
    },
    hovery: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loaded: false,
      animating: false,
      itemStyle: {
        width: '100%',
        height: '100%'
      }
    }
  },
  mounted() {
    document.getElementById(this.image).onload = () => {
      this.loaded = true
    }
  },
  computed: {
    containerStyle() {
      if (this.loaded) {
        return {
          position: 'absolute',
          lineHeight: '0',
          left: this.x * this.scale + 'px',
          top: this.y * this.scale + 'px',
          width:
            document.getElementById(this.image).naturalWidth * this.scale +
            'px',
          height:
            document.getElementById(this.image).naturalHeight * this.scale +
            'px'
        }
      } else {
        return {
          position: 'absolute',
          lineHeight: '0',
          left: this.x * this.scale + 'px',
          top: this.y * this.scale + 'px',
          width: 'auto',
          height: 'auto'
        }
      }
    },
    animClass() {
      if (this.animating) {
        return 'animated ' + this.animation
      } else {
        return ''
      }
    }
  },
  methods: {
    foundItem() {
      if (this.clickable) {
        this.$emit('log-item', this.id)
        this.animating = true
        setTimeout(() => {
          this.animating = false
          this.$emit('log-done')
        }, this.time * 600)
      }
    },
    hoverAnim() {
      if (this.hovery) {
        this.animating = true
        setTimeout(() => {
          this.animating = false
        }, this.time * 600)
      }
    }
  }
}
</script>

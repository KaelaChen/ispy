<template>
  <div :style="containerStyle">
    <img
      :id="image"
      :src="image"
      :class="animClass"
      :style="itemStyle"
      @click="foundItem"
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
      default: 'swing'
    },
    time: {
      type: Number,
      default: 2
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
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
    }
  },
  data() {
    return {
      animating: false,
      containerStyle: {
        position: 'absolute',
        left: this.x * this.scale + 'px',
        top: this.y * this.scale + 'px',
        width: 'auto',
        height: 'auto'
      },
      itemStyle: {
        width: '100%',
        height: '100%'
      }
    }
  },
  mounted() {
    document.getElementById(this.image).onload = () => {
      this.containerStyle.width =
        document.getElementById(this.image).naturalWidth * this.scale + 'px'
      this.containerStyle.height =
        document.getElementById(this.image).naturalHeight * this.scale + 'px'
    }
  },
  computed: {
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
    }
  }
}
</script>

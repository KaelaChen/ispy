<template>
  <div id="app">
    <div
      style="display: flex; justify-content: center; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;"
    >
      <router-view :ratio="ratio" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: 0
    }
  },
  methods: {
    getRatio() {
      let width = Math.min(1920, window.innerWidth)
      let height = Math.min(1080, window.innerHeight)
      let ratio = Math.min(width / 1920, height / 1080)
      this.ratio = ratio
    }
  },
  mounted() {
    this.getRatio()
    this.$nextTick(() => {
      window.addEventListener('resize', this.getRatio)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fixed-bg {
  width: 100%;
  height: 100%;
}
</style>

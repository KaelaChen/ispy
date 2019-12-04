<template>
  <div class="poem">
    <p>I spy</p>
    <p
      v-for="(item, index) of items"
      :key="index"
      :class="{ found: item.found }"
    >
      {{ item.phrase }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.poem {
  position: absolute;
  bottom: 2%;
  left: 10%;
  width: 80%;
  background: rgba(238, 236, 231, 0.7);
  padding: 1em;
  z-index: 1;
}
.poem p {
  display: inline;
  user-select: none;
}
.poem .found {
  color: rgb(65, 100, 255);
  font-weight: bold;
}
</style>

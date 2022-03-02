<template>
  <div id="app">
    <icon-component/>
  </div>
</template>

<script>
import IconComponent from './components/Icon.vue'
export default {
  name: 'App',
  components: {
    IconComponent
  },

  data: () => ({
     api_key_for_open_weather: "fa5a4ad995c8d3eda7d598f4aa9131ab",
    }
  )
}
</script>

<style>
</style>

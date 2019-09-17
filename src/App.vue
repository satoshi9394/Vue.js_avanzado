<template lang="pug">
  #app
    input(v-model="name")
    button(v-on:click="format") Format


    p {{ formatName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',

      formatName: '',
    }
  },
  methods: {
    format() {
      this.formatName = this.name.split(' ').join('-').toUpperCase()
    }
  }

}
</script>

<style lang="scss">
  @import'./scss/main.scss';



</style>

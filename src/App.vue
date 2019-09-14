<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else) {{ "vaya algo mas" }}

    p(v-else-if="true") {{ value }}
    
    ul
      li(v-for="i in items") {{ i }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello word angel',

      showValue: false,
      value: "Genial",
      items: [1,2,3,4,5]

    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'

</style>

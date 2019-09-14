<template lang="pug">
  #app
    h1 {{ msg }}
    p {{ 1 + 1 }}
    p {{ 'Hola' + 'Mundo' }}
    p {{ person.name }}
    p {{ person.name.toUpperCase() }}
    p {{ JSON.stringify(person.name) }}
    p {{ true ? 'true' : 'false' }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello word angel',
      person:{
        name:'angel',
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'

</style>

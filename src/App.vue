<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    div(class='container')
      img(src="./assets/logo_platzi.png")
      h1(class="Titulo") {{ name_form }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello word angel',
      name_form: "Registro estacion platzi" 
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'

</style>

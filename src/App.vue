<template lang="pug">
  #app
    section(class="section")
      div(class="container")
        img(src="./assets/logo_platzi.png")
        h1(class="title")
          b Registro de estacion Platzi
        form
          .field
            label(class="label") Nombre
            .control
              input(class="input is-complete" type="text" v-model="register.name")
          .field
            label(class="label") Apellido
            .control
              input(class="input is-complete" type="text" v-model="register.lastname")
          .field
            label(class="label") Cargo
            .control
              input(class="input is-complete" type="text" v-model="register.position")
          div(class="field is-grouped is-grouped-right")
            p(class="control")
              a(class="button is-primary is-large") Enviar
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      register: {
        name: '',
        lastname: '',
        position: ''
      }
    }
  }
}
</script>
<style lang="scss">
  @import './scss/main.scss';
  $color-first:#a3ecf3;
  $color-secondary:#00BFD6;
  $color-third:#212121;
  $color-fourth:#dd9300;

  .title{
    color:$color-secondary;

  }
  .is-complete{
    border-color: white;
    border-bottom:2px solid $color-fourth;
  }
  .label{
    color:$color-fourth;
  }
  .container{
    display:flex;
    flex-flow:column wrap;
    align-content:center;
  }

</style>

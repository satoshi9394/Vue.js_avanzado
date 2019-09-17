<template lang="pug">
  #app
    p Name
    input(v-model="name")
    br
    p Last name
    input(v-model="last_name")
    br
    p Full name: {{ fullName }}

    br
    p Birthday
    input(v-model="birthday" placeholder="YYYY-MM-DD")
    p {{ todayAge }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      last_name: '',
      birthday: ''
    }
  },



  computed: {
    fullName () {
      return`${ this.name}${ this.last_name }`;
    },

    todayAge () {
      let date_birth = this.birthday;
      let actual_date = new Date();
      let current_year = actual_date.getFullYear()
      if(date_birth.match(/^[\d0-9]{4}[-]+[\d0-9]{2}[-]+[\d0-9]{2}$/)){
        let year = date_birth.split('-')[0];
        let age = current_year - year;
        return (age > 0 ? `Actual age: ${ age }` : `Only dates before ${ current_year }`);
      } else {
        return'Birthday format doesn\'t match';
      }
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
  @import'./scss/main.scss';
</style>

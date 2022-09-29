<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   home
  // },
  mounted() {
    this.$router.push({name:'login'});
  }
}
</script>

<style>

</style>

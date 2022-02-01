<template>
  <div id="app">
  <Navigation> </Navigation>
  <Home> </Home>
  </div>
</template>

<script>
import nav from './components/nav'
import Home from './components/home'

export default {
components:{
Navigation:nav,
Home
},

  data(){
    return{

    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

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
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
background: rgb(8,17,80);
background: linear-gradient(219deg, rgba(8,17,80,1) 0%, rgba(15,15,59,1) 46%, rgba(15,24,47,1) 100%);
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
}

/* Handle */
::-webkit-scrollbar-thumb {
 
  border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>

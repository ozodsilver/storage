<template>
    <div>
        <div class="about">
<h2 class="text-center text-white pt-3">About me</h2>
<div class="liniya pt-4 px-3 container">

     
<button @click="selectedComponent = 'first'" class="btn btn-warning">
  images
</button>

<button @click="selectedComponent = 'second'" class="btn btn-danger mx-4">
  works
</button>

<button @click="selectedComponent = 'third'" class="btn btn-warning">
  ishxona
</button>

<component :is="selectedComponent"> </component>
</div>

<div>

</div>




        </div>
    </div>
</template>

<script>
import first from './aboutme/first.vue'
import second from './aboutme/second.vue'
import third from './aboutme/third.vue'
export default {
    components:{
        first,
        second,
        third
    },

    data() {
        return {
            selectedComponent:'first'
        };
    },

      created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
        let about = document.querySelector('.about');
let me = document.querySelector('.me');
     if(window.scrollY > 200 && window.scrollY < 500) {
      about.style.marginTop = '-150px'
     
     }

     if(window.scrollY > 0 && window.scrollY < 200) {
      about.style.marginTop = '-70px'

     }


     if(window.scrollY > 500){
 me.style.cssText = 'transform:translateX(0px)'
     }
     
    
    },

   
  }

};
</script>

<style lang="scss" scoped>
@import './styles/about.scss'
</style>
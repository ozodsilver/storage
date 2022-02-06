<template>
    <div>
        <section>
            <video src=".././assets/production ID_5155680.mp4" autoplay muted loop></video>
<div class="nad-video">
    <div class="left">
<div class="center">
    <div>
       <h1 class="text-white fw-bold">"Поставить <span class="text-warning">цель</span>, двигаться дальше и достигать <span class="text-success">результата</span> "</h1>
    <vue-typed-js :strings="['Привет', 'Я Ozodxon Rabbanaqulov', 'Я frontend(vue.js) developer']">
  <h1 class="typing text-light"></h1>
</vue-typed-js> 
    </div>
    
</div>
    </div>

    <div class="right" v-tilt = '{glare:true}'>
      <div>
            <a href="" class="text-white">link1</a>
           <a href="" class="text-white">link1</a>
            <a href="" class="text-white">link1</a>
             <a href="" class="text-white">link1</a>
              <a href="" class="text-white">link1</a>
      </div>
        
              
      
    </div>

     <div class="shadow">
            
        </div>

          <div class="shadow2">
            
        </div>
</div>


        </section>
    </div>
</template>

<script>
export default {
   

    data() {
        return {
            
        };
    },

    mounted() {
    let about = document.querySelector('.about');
        console.log(window.scrollY);

    if(window.scrollY == 600 ){
        about.style.marginTop ='-77px !important';

    }
    
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import  './styles/home.scss'
</style>
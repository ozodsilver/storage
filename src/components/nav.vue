<template>
  <div>
    <div class="parent">
      <nav>
      <div class="logo">
         <lord-icon
    src="https://cdn.lordicon.com/gmzxduhd.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width:40px;height:40px;">
</lord-icon>
<h4><a href="#">Главная</a></h4>
      </div>
      </nav>

     
       
        <div class="nav-parent">
            <div class="link1 link">
<a href="">link1</a>
            </div>

             <div class="link2 link">
                <a href="">link1</a>
            </div>

             <div class="link3 link">
                <a href="">link1</a>
            </div>

             <div class="link4 link">
                <a href="">link1</a>
            </div>

             <div class="link5 link">
                <a href="">link1</a>
            </div>
        </div>
         <div class="progress">
          <vue-scroll-progress-bar @complete="handleComplete" id="scrollbar" height = '10px' backgroundColor = 'rgb(135, 147, 148)' />
      </div>
    </div>

    
  </div>
</template>

<script>
import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'
export default {
components:{
VueScrollProgressBar
},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./styles/nav.scss";
</style>
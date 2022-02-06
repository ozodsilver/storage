<template>
    <div>
        <div class="about">
<h2 class="text-center text-white pt-3">About me</h2>
<div class="liniya">

       <a href="#" class="mx-3">dsdsds</a>
    <a href="#">dsdsds</a>

</div>

<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6">
<div class="border-rad" >
<img src="../assets/hhhhh-removebg-preview.png" alt="" class="me">
</div>
        </div>

        <div class="col-lg-6">
<h2 class="text-center text-white">Ozodxon</h2>
<h5 class="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores hic asperiores in quisquam voluptatem fuga voluptas sit, sunt autem amet inventore totam tenetur similique illo tempora accusantium deleniti optio?</h5>
        </div>
    </div>
</div>

        </div>
    </div>
</template>

<script>
export default {
    

    data() {
        return {
            
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
      me.style.cssText = 'transform: translateX(0px)'
     }

     if(window.scrollY > 0 && window.scrollY < 200) {
      about.style.marginTop = '-70px'
me.style.cssText = 'transform: translateX(-700px)'
     }
    }
  }

};
</script>

<style lang="scss" scoped>
@import './styles/about.scss'
</style>
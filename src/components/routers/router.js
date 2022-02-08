import VueRouter from "vue-router";
import first from '../aboutme/first.vue'
import second from '../aboutme/second.vue'


let Routes = new VueRouter({
mode:'history',
routes:[
  {
    path:'/first',
    name:'first',
    component:first
  },
  {
    path:'/second',
    name:'second',
    component:second
  }
]
})



export default Routes;
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Accueil from '@/components/Accueil'
import Portfolios from '@/components/Portfolios'

import firebase from "firebase";
import "firebase/auth";


Vue.use(VueRouter)

const routes = [
  { path: '/Helloworld', name: 'HelloWorld', component: HelloWorld },
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/Portfolios', name: 'Portfolios', component: Portfolios, meta: {requiresAuth: true} },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated){
    next("/");
  }else {
    next();
  }
})


export default router


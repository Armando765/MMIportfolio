import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ajout from '@/components/Ajout'
import Accueil from '@/components/Accueil'
import Portfolios from '@/components/Portfolios'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Helloworld', name: 'HelloWorld', component: HelloWorld },
    { path: '/Ajout', name: 'Ajout', component: Ajout },
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/Portfolios', name: 'Portfolios', component: Portfolios },
  ]
})

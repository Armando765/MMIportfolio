<template>
  <div id="blur">
    <h3>Rechercher un portfolio par étudiant</h3>

    <input v-model="query">

    <div class="filter">
      <label><input type="radio" v-model="selectedSpecialite" value="All" /> Toutes</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Developpement" /> Developpement</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Webdesign" /> Webdesign</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Communication" /> Communication</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Motion Design" /> Motion Design</label>
    </div>

    <transition-group class="container" name="flip-list" tag="div">
      <div class="card" v-for="(test, index) in SearchByEtudiant && filtreSpecialite" :key="test.Etudiant">
        <div class="imgBx">
          <img :src="test.img">
        </div>
        <div class="content">
          <h2>{{ test.Etudiant }}</h2>
          <a :href="test.Portfolio">Portfolio</a>
          <button @click="remove(index)">
            Supprimer
          </button>
        </div>
      </div>
    </transition-group>
    <!--
      <div class="container">
      <div class="card" v-for="test in site" :key="test.id">
        <div class="imgBx">
          <img src="../assets/img1.png">
        </div>
        <div class="content">
          <h2>{{ test.Etudiant }}</h2>
          <a :href="test.Portfolio">Portfolio</a>
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import axios from 'axios'
/*
export default {
  name: 'HelloWorld',
  data () {
    return {
      site : [],
      images : [],
      query: "",
      selectedSpecialite: "All"
    }
  },
  created(){

    axios.get('static/portfolio.json')
      .then(function (response) {

        console.log(response.data);
        this.site = response.data;

      }.bind(this))
      .catch(function (error) {
        //erreur//
        console.log(error);
      });
  },
  computed:{
    Recherche: function (){
      var vm = this;
      var category = vm.selectedSpecialite;
      if(category === "All") {
        return vm.site;
      } else {
        return vm.site.filter(function(person) {
          return person.Specialite === category;
        })
        .filter(function (){

        })
      }

    },
    filtreSpecialite: function() {

    }
  },
  methods:{
    Ajouter: function (){
      var ajout = this.site;
    this.site.push({
        Etudiant     : ajout.Etudiant,
        Specialite   : ajout.Specialite,
        Portfolio   : ajout.Portfolio,
      });
    },
    remove (index){
      this.index = this.site;
      this.site.splice(index, 1)
    },
    SearchByEtudiant: function (){
      var query = this.query;
      return this.site.filter(function (eleve){
        return eleve.Etudiant.includes(query);
      })
    },
  },
}
*/
export default {
  name: 'HelloWorld',
  data () {
    return {
      site : [],
      images : [],
      query: "",
      selectedSpecialite: "All"
    }
  },
  created(){

    axios.get('static/portfolio.json')
      .then(function (response) {

        console.log(response.data);
        this.site = response.data;

      }.bind(this))
      .catch(function (error) {
        //erreur//
        console.log(error);
      });
  },
  computed:{
    Recherche: function (){


    },
    filtreSpecialite: function() {
      var vm = this;
      var category = vm.selectedSpecialite;
      if(category === "All") {
        return vm.site;
      } else {
        return vm.site.filter(function(person) {
          return person.Specialite === category;
        });
      }
    },
    SearchByEtudiant: function (){
      var query = this.query;
      return this.site.filter(function (eleve){
        return eleve.Etudiant.includes(query);
      })
    },
  },
  methods:{
    Ajouter: function (){
      var ajout = this.site;
      this.site.push({
        Etudiant     : ajout.Etudiant,
        Specialite   : ajout.Specialite,
        Portfolio   : ajout.Portfolio,
      });
    },
    remove (index){
      this.index = this.site;
      this.site.splice(index, 1)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flip-list-move {
  transition: all 1s;
}
.container {
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}
.container .card {
  transition: all 1s;
  position: relative;
  max-width: 500px;
  height: 300px;
  background: #fff;
  border-radius: 20px ;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0,0,0,0.5);
  transition: 0.3s ease-in-out;
}
.container .card:hover {
  height: 520px;
}
.container .card  .imgBx {
  position: relative;
  width: 450px;
  min-height: 260px;
  top: -60px;
  left: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.container .card  .imgBx img {
  max-width: 100%;
  border-radius: 4px;
}
.container .card .content {
  position: relative;
  margin-right: 200px;
  margin-left: 200px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.container .card:hover .content {
  visibility: visible;
  opacity: 1;
}
a {
  text-decoration: none;
  color: red;
  font-size: 2em;
  text-align: center;
}
.specialites {
  width: 50%;
  height: 100px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.specialites a {
  margin: 20px;
  cursor: pointer;
  transition: .5s;
}
.specialites > a:hover{
  font-size: 1.2em;
}
</style>


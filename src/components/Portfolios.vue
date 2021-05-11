<template>
  <div>
    <div id="blur">
      <header>
        <nav>
          <ul>
            <li><a v-if="loggedIn" href="#" @click="signOut()">Déconnexion</a><a href="#" v-else @click="Modale">Se Connecter</a></li>
            <li><a v-if="loggedIn">Etat : Connecté</a><a v-else href="#">Etat : Non Connecté</a></li>
            <li><a href="#">Accueil</a></li>
          </ul>
        </nav>
      </header>
      <h1 class="listeportfolio">Liste des Portfolios</h1>


      <div class="filtrageportfolio">
        <p>Rechercher un portfolio</p>
        <input v-model="query" type="text" placeholder="Prénom Nom">
      </div>

      <!--
      <div class="filter">
      <label><input type="radio" v-model="selectedSpecialite" value="All" /> Toutes</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Developpement" /> Developpement</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Webdesign" /> Webdesign</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Communication" /> Communication</label>
      <label><input type="radio" v-model="selectedSpecialite" value="Motion Design" /> Motion Design</label>
    </div>
      -->

      <transition-group class="container" name="flip-list" tag="div">
        <div class="card" v-for="(test, index) in SearchByEtudiant" :key="test.Etudiant">
          <div class="imgBx">
            <img :src="test.img">
          </div>
          <div class="content">
            <h2>{{ test.Etudiant }}</h2>
            <a :href="test.Portfolio" class="lien">Portfolio</a> <br>
            <button @click="remove(index)">
              Supprimer
            </button>
          </div>
        </div>
      </transition-group>

      <div class="container">
        <a href="#" @click="modaleAjout()">Ajouter un Portfolio</a>
      </div>
    </div>
    <div id="popupajouter">
      <img src="../assets/croix.png" alt="croix" width="30px" height="30px" @click="modaleAjout()">
      <h3>Ajouter un Portfolio</h3>
      <form action="">
        <div>
          <label for="name">Etudiant :</label>
          <input v-model="site.Etudiant" type="text" id="name">
        </div>
        <div>
          <label for="spe">Spécialité : </label>
          <input v-model="site.Specialite" type="text" id="spe">
        </div>
        <div>
          <label for="lien">Portfolio : </label>
          <input v-model="site.Portfolio" type="text" id="lien">
        </div>
        <button type="submit" @click.prevent="Ajouter(); modaleAjout()">
          Ajouter
        </button>
      </form>
    </div>
    <footer>
      <img src="../assets/logouniv.png" alt="logo université">
    </footer>

    <div id="popup">
      <img src="../assets/croix.png" alt="croix" width="30px" height="30px" @click="Modale">
      <h3>Se Connecter</h3>
      <form action="">
        <div>
          <label for="name">Adresse mail</label>
          <input type="text" >
        </div>
        <div>
          <label for="spe">Mot de passe</label>
          <input  type="text">
        </div>
        <button type="submit" @click="Modale">
          Connexion
        </button>
      </form>
    </div>


  </div>
</template>
<script>
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
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage"
import axios from 'axios'
export default {
  name:'Portfolios',
  data () {
    return {
      site : [],
      images : [],
      query: "",
      selectedSpecialite: "All",
      loggedIn: false,
      filejson: null,
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
    firebase.auth().onAuthStateChanged(user=> {
      this.loggedIn = !!user;
      /*
      if (user){
        this.loggedIn = true;
      }else{
        this.logged = false;
      }
       */
    })
  },
  computed:{
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
    modaleAjout: function () {
      var blur = document.getElementById('blur');
      blur.classList.toggle('active')
      var popupajout = document.getElementById('popupajouter');
      popupajout.classList.toggle('active')
    },
    Modale () {
      var blur = document.getElementById('blur');
      blur.classList.toggle('active')
      var popup = document.getElementById('popup');
      popup.classList.toggle('active')
    },
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({name: "Accueil"});
      }catch (err){
        console.log(err)
      }
    }
  },
}
</script>
<style>
#popupconnexion {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  padding: 35px 50px 35px 50px;
  box-shadow: 0 5px 30px rgba(0,0,0,.30);
  background: #1c3454;
  border-radius: 20px;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
#popupconnexion.activate {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: .5s;
}
#popupconnexion > form > button {
  width: 200px;
  background: #d5dee3;
  border: none;
  border-radius: 50px;
  color: #8F0002;
  padding: 15px 20px 15px 20px;
  font-family: 'Lexend',sans-serif;
  font-size: 1.2em;
  margin-top: 10px;
  cursor: pointer;
  transform: translateX(200px);
}
#popupconnexion > h3 {
  font-family: 'Merienda',sans-serif;
  text-align: center;
  color: #d5dee3;
  font-size: 2.5em;
  margin: 0 0 5px 0;
}
#popupconnexion > img {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
#popupconnexion > form {
  width: 100%;
  height: 300px;
}
#popupconnexion > form > div {
  height: 110px;
}
#popupconnexion > form > div > input {
  width: 100%;
  height: 35px;
  display: block;
  border-radius: 50px;
  margin: 25px 0 0 0;
}
#popupconnexion > form > div > input:first-child {
  margin-bottom: 35px;
}
#popupconnexion > form > div > label {
  font-family: 'Lexend', sans-serif;
  font-size: 1.2em;
  color: #d5dee3;
}



#popupajouter > h3 {
  font-family: 'Merienda',sans-serif;
  text-align: center;
  color: #d5dee3;
  font-size: 2.5em;
  margin: 0 0 5px 0;
}
#popupajouter > img {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
#popupajouter > form {
  width: 100%;
  height: 300px;
}
#popupajouter > form > div {
  height: 110px;
}
#popupajouter > form > div > input {
  width: 100%;
  height: 35px;
  display: block;
  border-radius: 50px;
  margin: 25px 0 0 0;
}
#popupajouter > form > div > input:first-child {
  margin-bottom: 35px;
}
#popupajouter > form > div > label {
  font-family: 'Lexend', sans-serif;
  font-size: 1.1em;
  color: #d5dee3;
}
#popupajouter {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  height: 500px;
  padding: 35px 50px 35px 50px;
  box-shadow: 0 5px 30px rgba(0,0,0,.30);
  background: #1c3454;
  border-radius: 20px;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
#popupajouter.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: .5s;
}
#popupajouter > form > button {
  width: 200px;
  background: #d5dee3;
  border: none;
  border-radius: 50px;
  color: #8F0002;
  padding: 15px 20px 15px 20px;
  font-family: 'Lexend',sans-serif;
  font-size: 1.2em;
  margin-top: 10px;
  cursor: pointer;
  transform: translateX(200px);
}
.listeportfolio {
  text-align: left;
  margin: 80px 0 0 100px;
}

.filtrageportfolio {
  width: 42%;
  height: 200px;
  margin-left: 100px;
}
.filtrageportfolio > p {
  font-family: 'Lexend', sans-serif;
  font-size: 1.5em;
  color: #1c3454;
}
.filtrageportfolio > input {
  border-radius: 25px;
  border: 1px solid gray;
  width: 95%;
  height: 50px;
  font-size: 1.5em;
  color: gray;
}



.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}
.container .card {
  transition: all 1s;
  position: relative;
  width: 515px;
  height: 300px;
  background: #1c3454;
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
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.content > h2 {
  font-family: 'Lexend', sans-serif;
  font-size: 2.5em;
  color: #d5dee3;
}
.container .card:hover .content {
  visibility: visible;
  opacity: 1;
}
.lien {
  text-decoration: none;
  font-family: 'Merienda', sans-serif;
  color: #d5dee3;
  font-size: 2.5em;
  text-align: center;
  transition: .5s;
}
.lien:hover {
  text-decoration: underline;
}
.content > button {
  border: none;
  background-color: #d5dee3;
  color: #8F0002;
  font-family: 'Lexend', sans-serif;
  font-size: 1.1em;
  margin-top: 30px;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: .5s;
}
.content > button:hover {
  transform: scale(1.05);
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



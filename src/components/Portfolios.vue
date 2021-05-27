<template>
  <div>
    <div id="blur">
      <!--
      <header>
        <nav>
          <ul>
            <li><a v-if="loggedIn" href="#" @click="signOut()">Déconnexion</a><a href="#" v-else @click="Modale">Se Connecter</a></li>
            <li><a v-if="loggedIn">Etat : Connecté</a><a v-else href="#">Etat : Non Connecté</a></li>
            <li><a href="#">Accueil</a></li>
          </ul>
        </nav>
      </header>
      -->
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
      <div class="container">
        <a href="#" @click="modaleAjout()" class="ajouterlien">Ajouter un Portfolio</a>
      </div>




      <transition-group class="container" name="flip-list" tag="div">
        <div class="card" v-for="(test, index) in SearchByEtudiant" :key="test.Etudiant">
          <svg @click="remove(index)" width="25px" height="25px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
          <div class="imgBx">
            <a :href="test.Portfolio"><img alt="image du portfolio" :src="test.img"></a>
          </div>
          <div class="content">
            <h2>{{ test.Etudiant }}</h2>
          </div>
        </div>
      </transition-group>

    </div>
    <div id="popupajouter">
      <img src="../assets/croix.png" alt="croix" width="30px" height="30px" @click="modaleAjout()">
      <h3>Ajouter un Portfolio</h3>
      <form action="">
        <div class="champs">
          <label for="name">Prénom Nom de l'étudiant :</label>
          <input required v-model="site.Etudiant" type="text" id="name">
        </div>
        <div class="champs">
          <label for="lien">Lien du portfolio : </label>
          <input required v-model="site.Portfolio" type="text" id="lien">
        </div>
        <div class="champs">
          <select v-model="site.Specialite">
            <option disabled value="">Spécialité</option>
            <option>Développement</option>
            <option>Webdesign</option>
            <option>Communication</option>
            <option>Motion Design</option>
          </select>
          <span class="selectionne">Spécialité sélectionnée : {{ site.Specialite }}</span>
        </div>
        <input class="inputfile" type="file" @change="onFileSelected">
        <button class="upload" @click.prevent="onUpload">Upload</button>
        <div class="preview">
          <img :src="this.picture" alt="preview">
        </div>
        <button class="ajouter" type="submit" @click.prevent="Ajouter(); modaleAjout()">
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
          <input required type="text" >
        </div>
        <div>
          <label>Mot de passe</label>
          <input required  type="text">
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
      imgfirebase: "",
      imageData: null,
      picture: "",
      uploadValue: 0,
      selectedFile: null,
      query: "",
      select : null, //sélection spécialité lors de l'ajout
      selectedSpecialite: "All", // filtre spécialité
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
    // Fonction ajouter un portfolio
    Ajouter: function (){
      var ajout = this.site;
      this.site.push({
        Etudiant     : ajout.Etudiant,
        Specialite   : ajout.Specialite,
        Portfolio    : ajout.Portfolio,
        img          : ajout.picture,
      });
      console.log(this.site);
    },
    // Fonction supprimer un portfolio
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
    //fonction déconnexion
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({name: "Accueil"});
      }catch (err){
        console.log(err)
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    previewImage(event){
      this.uploadValue=0;
      this.picture=null;
      this.imageData=event.target.files[0];
    },
    onUpload() {
      this.picture=null;
      const storageRef=firebase.storage().ref('${this.selectedFile.name}');
      const task=storageRef.put(this.selectedFile);
      task.on('state_changed',snapshot=>{
        let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          this.uploadValue= percentage;
        }, error=>{
          console.log(error)},
        ()=>{this.uploadValue=100;
          task.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture=url;
            console.log(this.picture)
          })})
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
.champs {
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
  height: 770px;
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
  cursor: pointer;
}
.ajouter {
  margin-top: 25px;
  transform: translateX(200px);
}
.upload {
  margin: 0 10px 0 130px;
  transition: .5s;
}
.upload:hover {
  transform: scale(1.03);
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
.card > svg {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  transition: .5s;
  color: #8f0002;
}
.card > svg:hover {
  color: #d5dee3;
}
.container .card:hover {
  transform: translateY(-10px);
}
.container .card  .imgBx {
  position: relative;
  width: 450px;
  min-height: 260px;
  top: -60px;
  left: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  background-image: url("../assets/mmiportfolioimg.jpg");
}
.container .card  .imgBx img {
  max-width: 100%;
  border-radius: 4px;
  transition: .5s;
}
.container .card img:hover {
  transform: scale(1.03);
}
.container .card .content {
  position: relative;
  text-align: center;
  color: #111;
  transition: 0.3s ease-in-out;
  transform: translateY(-25px);
}
.content {
  margin: 0;
}
.content > h2 {
  font-family: 'Lexend', sans-serif;
  font-size: 2em;
  color: #d5dee3;
  margin: 0;
  visibility: visible;
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
.content > button,.ajouterlien {
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
  text-decoration: none;
}
.content > button:hover,.ajouterlien:hover {
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
select {
  width: 150px;
  height: 35px;
  margin: 40px 15px 0 0;
  background-color: #d5dee3;
  color: #1c3454;
}
.selectionne {
  font-family: "Lexend", sans-serif;
  color: #d5dee3;
}
.preview {
  width: 250px;
  height: 220px;
  margin: 20px auto 0 auto;
  border: 1px solid red;
}
.preview > img {
  width: 100%;
  height: 100%;
}


@media screen and (max-width: 764px) {
  .listeportfolio {
    text-align: center;
    font-size: 30px;
    margin: 15px 0 25px 0;
  }
  .filtrageportfolio {
    width: 80%;
    height: 50px;
    margin-left: 25px;
  }
  .filtrageportfolio > p {
    font-size: 1em;
    color: #1c3454;
    margin-bottom: 10px;
  }
  .filtrageportfolio > input {
    width: 100%;
    height: 40px;
    font-size: 1em;
    color: gray;
  }
  .container .card {
    transition: all 1s;
    position: relative;
    width: 250px;
    height: 100px;
    background: #1c3454;
    border-radius: 20px ;
    margin: 35px 15px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
  }
  .container .card  .imgBx {
    position: relative;
    width: 200px;
    min-height: 50px;
    top: -60px;
    left: 20px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    background-image: url("../assets/mmiportfolioimg.jpg");
  }
  .container .card  .imgBx img {
    max-width: 100%;
    border-radius: 4px;
    transition: .5s;
  }
  .content > h2 {
    font-family: 'Lexend', sans-serif;
    font-size: 1.2em;
    color: #d5dee3;
    visibility: visible;
    margin-top: 48px;
  }
  #popupajouter {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 500px;
    padding: 10px 50px 35px 50px;
    box-shadow: 0 5px 30px rgba(0,0,0,.30);
    background: #1c3454;
    border-radius: 20px;
    visibility: hidden;
    opacity: 0;
    transition: .5s;
  }
  #popupajouter > h3 {
    font-size: 1.3em;
    margin: 0 0 25px 0;
  }
  #popupajouter > form {
    width: 100%;
    height: 300px;
  }
  .champs {
    height: 80px;
  }
  #popupajouter > form > div > label {
    font-size: 0.9em;
    color: #d5dee3;
  }
  #popupajouter > form > div > input {
    height: 35px;
    display: block;
    border-radius: 50px;
    margin: 5px 0 0 0;
  }
  select {
    width: 100%;
    height: 35px;
    margin: 15px 15px 0 0;
    background-color: #d5dee3;
    color: #1c3454;
  }
  .selectionne {
    display: none;
  }
  .inputfile {

  }
  .upload {
    margin: 20px 0 20px 0;
    -webkit-transition: .5s;
    transition: .5s;
    transform: translateX(50px);
  }
  #popupajouter > form > button {
    width: 100px;
    height: 50px;
    background: #d5dee3;
    border: none;
    border-radius: 50px;
    color: #8F0002;
    padding: 5px 5px 5px 5px;
    font-size: 1em;
    cursor: pointer;
  }
  .preview {
    display: none;
  }
  .ajouter {
    margin-top: 20px;
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
  }
}
</style>



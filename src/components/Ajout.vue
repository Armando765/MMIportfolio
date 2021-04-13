<template>
    <div>
      <!--
      <div>
      <div class="container">
          <a href="#" @click="modale()">Read More</a>
        </div>
      </div>
      <div id="popup">

        <form action="">
          <div>
            <label for="name">Etudiant :</label>
            <input v-model="formAjout.Etudiant" type="text" id="name">
          </div>
          <div>
            <label for="spe">Spécialité : </label>
            <input v-model="formAjout.Specialite" type="text" id="spe">
          </div>
          <div>
            <label for="lien">Portfolio : </label>
            <input v-model="formAjout.Portfolio" type="text" id="lien">
          </div>
          <button type="submit" @click.prevent="Ajouter(formAjout)">
            Ajouter
          </button>
        </form>
        <a href="#" @click="modale()">Close</a>
      </div>
      -->
    </div>
</template>
<script>
export default {
  name: 'Ajout',
  data() {
    return {
      formAjout : {
        Etudiant     : "",
        Specialite   : "",
        Portfolio   : "",
      }
    }
  },
  methods : {
    modale: function () {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active')
        var popup = document.getElementById('popup');
        popup.classList.toggle('active')
    },
    Ajouter(formAjout){
      this.$emit('Ajouter', formAjout);

      var fermeture = document.getElementById('popup');
      fermeture.classList.remove('active');
      var blur = document.getElementById('blur');
      blur.classList.toggle('active')
    }
  }
}
</script>
<style>
/*
#blur.active {
  filter: blur(20px);
  pointer-events: none;
  user-select: none;
}
h2 {
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}
a {
  position: relative;
  padding: 5px 20px;
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  background: #111;
}

#popup {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  padding: 50px;
  box-shadow: 0 5px 30px rgba(0,0,0,.30);
  background: #fff;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
#popup.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  z-index: 9999;
}
*/
</style>

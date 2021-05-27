<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: 'App',
  components : {
    Navigation
  },
  methods : {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #EBEBEB;
}
#blur.active {
  filter: blur(20px);
  pointer-events: none;
  user-select: none;
}
#popup > h3 {
  font-family: 'Merienda',sans-serif;
  text-align: center;
  color: #d5dee3;
  font-size: 2.5em;
  margin: 0 0 5px 0;
}
#popup > img {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
#popup > form {
  width: 100%;
  height: 300px;
}
#popup > form > div {
  height: 110px;
}
#popup > form > div > input {
  width: 100%;
  height: 35px;
  display: block;
  border-radius: 50px;
  margin: 25px 0 0 0;
}
#popup > form > div > input:first-child {
  margin-bottom: 35px;
}
#popup > form > div > label {
  font-family: 'Lexend', sans-serif;
  font-size: 1.2em;
  color: #d5dee3;
}
#popup {
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
  z-index: 999999;
}
#popup.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: .5s;
}
#popup > form > button {
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


/*
nav > ul {
  list-style: none;
  margin: 0;
}
nav > ul > li {
  display: inline;
  margin: 20px 35px 15px 0;
  float: right;
}
nav > ul > li:last-child {
  border-right: 1px solid #1D3354;
  padding-right: 35px;
  padding-left: 35px;
}
nav > ul > li:nth-child(2){
  border-right: 1px solid #1D3354;
  padding-right: 35px;
}
nav > ul > li > a {
  text-decoration: none;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1.3em;
  color: #1D3354;
  transition: .5s;
  padding-bottom: 5px;
}
nav > ul > li > a:hover {
  color: #8F0002;
}
 */
h1 {
  font-family: 'Lexend', sans-serif;
  color: #1D3354;
  font-size: 5.5em;
  text-align: center;
  margin-top: 200px;
  margin-bottom: 300px;
}
footer {
  width: 100%;
  height: 300px;
  background-color: #1c3454;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer > img {
  width: 250px;
  height: 100px;
}

@media screen and (max-width: 764px) {
  #popup {
    width: 200px;
    height: 400px;
    z-index: 999999;
  }
  #popup > form > button {
    transform: translateX(0);
  }
  #popup > h3 {
    font-family: 'Merienda',sans-serif;
    text-align: center;
    color: #d5dee3;
    font-size: 1.5em;
    margin: 50px 0 5px 0;
  }
}
</style>

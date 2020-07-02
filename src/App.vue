<template>
  <div id="app">
    <div id="innerContainer">
      <h1>Jarrod Dieppa's Projects</h1>
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from './components/Carousel'

export default {
  name: 'App',
  components: {
    Carousel
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nova+Square:regular");
@import url("https://fonts.googleapis.com/css?family=News+Cycle:regular");
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");
@import url("https://fonts.googleapis.com/css?family=PT+Sans");
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300");

html { font:100% arial,sans-serif; }
body {
    background-color: #333; font-size:.85em;
    font: 1em 'PT Sans', sans-serif;
   /* font-family: 'News Cycle', serif; */
    color: #444;margin:0;

    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    }
a img { border:1px solid #aaa; }

a:link {color: #0066a4;}
a:visited { color: #004b8d; }
a:hover,
a:focus {text-decoration:none;}
a:active {color: red;}

.clear { clear:both; }

h1 { font-size: 1.3rem; margin:0;padding:10px 0 }

#mainContainer {
  width: auto;
  max-width:1000px;
  margin: 0 auto;
}

#innerContainer {
  width: auto;
  margin: 0 auto;
  padding: 0 10px 20px;
  background-color: #eee;
  border-radius: 4px;
 }

header h1 {
  color: #666;
  text-shadow: #999 1px 1px 0px;
  font: normal 3.8rem 'Nova Square', sans-serif;
}

#innerContainer h1,
#innerContainer h2 {
  font: bold 1.8rem 'PT Sans Narrow', sans-serif;
  text-shadow: #fff 1px 1px 0px;
}
#innerContainer h1 { padding-left:10px; }

footer {
  color:aliceblue;
  text-align: center;
  margin-top:1%;
}

footer a:link,
footer a:visited,
footer a:hover,
footer a:active  {
  color:#3399ff;
}

@media only screen and (min-device-width : 768px) {
  #mainContainer {
    width: 80%;
    max-width: 1000px;
    min-width: 300px;
  }
}

</style>

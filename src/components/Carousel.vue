<template>
  <section class="carousel">
    <carousel-3d
      dir="ltr"
      :height="300"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :controls-height="60"
      :clickable="false">

      <!-- <slide v-for="(slide, i) in slides" :key='i' :index="i"> -->
      <slide v-for="(p, i) in projects" :key='i' :index="i">
        <!-- <a v-if="p.link" v-bind:href="p.link" target="_blank"><img v-bind:src="p.image"></a>
        <img v-else v-bind:src="p.image"> -->
        <img v-bind:src="p.image">

        <div class="description" v-html="p.name"></div>
      </slide>
    </carousel-3d>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      projects: [
        {
          name: 'NSF Rotators Microsite',
          image: '/static/img/projects/rotators.png',
          link: 'https://www.nsf.gov/careers/rotator/microsite/',
          description:
            '<p>Site created from PSD composites, partial content and the video urls. It uses an xml back end parsed in Java.</p>'
        },
        {
          name: 'AIM Registration',
          image: '/static/img/projects/aimReg_tb.jpg',
          link: '',
          description:
            '<p>One of many AOL registration flows. Different looks, tracking, required fields, confirmation pages, percentages of traffic going into each flow.</p>'
        },
        {
          name: 'American Geophysical Union',
          image: '/static/img/projects/agu_tb.jpg',
          link: 'http://www.agu.org/',
          description:
            '<p>AGU website redesign with only a few months to complete. While still in the design phase, we migrated the html into a new template with new styles and images.</p>'
        },
        {
          name: 'AOL Registration',
          image: '/static/img/projects/aolReg_tb.jpg',
          link: '',
          description:
            '<p>Started here as a contractor after which I was hired by AOL</p> <p>Worked on a Java based registration platform called ReGolution and a legacy Tcl based registration platform.</p>'
        },
        {
          name: 'FEMA Flood Hazard Mapping',
          image: '/static/img/projects/fhm_tb.jpg',
          link: 'https://www.fema.gov/national-flood-insurance-program-flood-hazard-mapping',
          description:
            '<p>Site contained over 600 static html pages. Work consisted of content updates, routine site-wide link checking and weekly file preperation and deliverables to the client which would be merged into the live site. Also wrote a <a href="http://www.noobfly.com/work/baker/js_acrdt.js">small script</a> to detect the version of the adobe (acrobat) reader plugin. If it found an old version you would get a popup warning when you click on PDF links that the PDF may not display properly.</p>'
        },
        {
          name: 'My Own Agent',
          image: '/static/img/projects/myownagent.jpg',
          link: 'http://www.noobfly.com/work/myownagent/',
          description:
            '<p>A small psd to html project I worked on as a contractor.</p>'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  margin: 8% 0;
}
.carousel-3d-slide{
  border-radius: 10px;
  border:none;
}
.carousel .description {
  position:absolute;
  bottom:0;
  height: auto;
  width:100%;
  color:#fff;
  text-align:center;
  background:rgba(0,0,0,0.7);
  padding:1rem;
}
</style>

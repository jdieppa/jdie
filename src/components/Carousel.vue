<template>
  <section class="carousel">
    <carousel-3d
      dir="rtl"
      :height="300"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :controls-height="60"
      :clickable="false"
      @before-slide-change="onBeforeSlideChange"
    >
      <slide v-for="(p, i) in projects" :key="i" :index="i">
        <!-- <a v-if="p.link" v-bind:href="p.link" target="_blank"><img v-bind:src="p.image"></a>
        <img v-else v-bind:src="p.image"> -->
        <img v-bind:src="p.image">
        <!-- <div class="name" v-html="p.name"/> -->
        <div v-if="p.link" class="name"><a v-bind:href="p.link" target="_blank">{{p.name}}</a></div>
        <div v-else class="name" v-html="p.name"/>
      </slide>
    </carousel-3d>

    <div class="description">
      <h2 v-html="currentProject.name"/>
      <div v-html="currentProject.description"/>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    onBeforeSlideChange (index) {
      this.currentProject = this.projects[index]
    }
  },
  data () {
    let projects = [
      {
        name: 'NSF Rotators Microsite',
        image: '/static/img/projects/rotators.png',
        link: 'https://www.nsf.gov/careers/rotator/microsite/',
        description:
          '<p>NSF requested a microsite to showcase their rotator positions with testimonials and video faqs. I was provided with PSD composites, partial content and the video urls. The site uses an xml back end for the faq and testimonial data which is parsed in Java.</p><p>I wrote everything there except for the content, from the random images on the home page to the transition/display of the testimonials and video faqs.</p>'
      },
      {
        name: 'AIM Registration',
        image: '/static/img/projects/aimReg_tb.jpg',
        link: '',
        description:
          '<p>This is one of the many AOL registration flows I worked with. Different looks, tracking, required fields, confirmation pages, percentages of the traffic going into each flow. It offered many interesting and challenging experiences.</p>'
      },
      {
        name: 'American Geophysical Union',
        image: '/static/img/projects/agu_tb.jpg',
        link: 'http://www.agu.org/',
        description:
          '<p>AGU was in the middle of a website redesign when I came in as a contractor. They only had a few months to get the design completed and rolled out. While still in the design phase, we took all of the old html and put them into the new template utilizing the new styles and images. The design was changing quite a bit while development was in process which made the css development that much more challenging. jQuery and jQueryUI was used for carousels, collapsable sections, several accordions throughout the site, and tabs</p>'
      },
      {
        name: 'AOL Registration',
        image: '/static/img/projects/aolReg_tb.jpg',
        link: '',
        description:
          '<p>I started here as a contractor mainly for psd to html/css work. After the contract I was hired by AOL</p><p>Most of my work was on a Java based registration platform called ReGolution. A lot of work was also done on a Tcl based registration platform which ran on AOLServer. At first, I was responsible for a lot of the psd to jsp work. As I became more familiar with the ReGolution platform, I did a lot of maintenance and eventually worked my way up to renovating the new main registration flow. The overhaul consisted of:</p><ul><li>Greatly simplifying the registration. Reducing the number of fields a user has to complete.</li><li>Added onblur client-side data validation to give the user immediate feedback on whether the data entered looks valid or not.</li><li>Added an ajax-based screen name availability check.</li></ul>'
      },
      {
        name: 'FEMA Flood Hazard Mapping',
        image: '/static/img/projects/fhm_tb.jpg',
        link:
          'https://www.fema.gov/national-flood-insurance-program-flood-hazard-mapping',
        description:
          '<p>At its peak, in 2002-2003, the Flood Hazard Mapping subsection of the fema.gov website had over 600 static html pages.This was the first large website I worked on. I was part of a 4 person, multi-contractor team responsible for all updates and maintenance. Most of our work involved content updates, routine site-wide link checking and weekly file preperation and deliverables to the client so that the files could be uploaded without issue. I also wrote a <a href="http://www.noobfly.com/work/baker/js_acrdt.js">small script</a> to detect the version of the adobe (acrobat) reader plugin. If it found an old version you would get a popup warning when you click on PDF links that the PDF may not display properly. I thought it was pretty slick for 2002.</p>'
      },
      {
        name: 'My Own Agent',
        image: '/static/img/projects/myownagent.jpg',
        link: 'http://www.noobfly.com/work/myownagent/',
        description:
          '<p>A small psd to html project I worked on as a contractor.</p>'
      }
    ]
    const currentProject = projects[0]

    return {
      projects: projects,
      currentProject: currentProject
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  margin: 8% 0;
}
.carousel-3d-slide {
  border-radius: 10px;
  border: none;
}
.carousel .name {
  position: absolute;
  bottom: 0;
  height: auto;
  width: 100%;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem;
}
.carousel .name a {
  color:#3399ff;
  color:#74baff;
}

.carousel .description {
  width: 80%;
  margin: 20px auto;
  padding: 15px 25px;
  background-color: #fff;
  -moz-box-shadow: 3px 3px 3px #888;
  -webkit-box-shadow: 3px 3px 3px #888;
  box-shadow: 3px 3px 3px #888;
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff,endColorstr=#ffffff), progid:DXImageTransform.Microsoft.Shadow(color=#888888,direction=125,strength=5)";
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff,endColorstr=#ffffff), progid:DXImageTransform.Microsoft.Shadow(color=#888888,direction=125,strength=5);

  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -khtml-border-radius: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.carousel .description h2 {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>

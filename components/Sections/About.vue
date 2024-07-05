<template>
  <section
    class="flex flex-col justify-center items-center relative"
    id="about"
  >
    <div class="container pt-6" id="about-me">
      <div class="about-desc">
        <h4 class="uppercase">Yeris Alejandra Aguilar</h4>
        <p class="my-3">{{ $t("aboutMeText") }}</p>

        <div class="relative">
          <a
            href="./pdf/Yeris_Aguilar_Cv.pdf"
            target="_blank"
            class="btn-purple mt-3"
            >{{ $t("downloadTextBtn") }}</a
          >
        </div>
      </div>
      <div class="image-container flex justify-center relative">
        <div class="image relative pt-6 pl-8">
          <img
            src="/assets/img.png"
            class="rounded-lg relative z-0"
            alt="yeris image"
          />
        </div>
      </div>
    </div>
    <!-- skills -->
    <!-- <div id="skills" class="flex justify-between lg:w-full  lg:px-40 lg:py-10 px-0 py-5"> -->
    <div id="techStack"><SwiperTechStack /></div>
    <!-- </div> -->
  </section>
</template>
<script setup>
const techStack = [
  {
    asset: "bitbucket.svg",
    tech: "Bitbucket",
  },
  {
    asset: "vue.svg",
    tech: "Vue JS",
  },
  {
    asset: "css.svg",
    tech: "CSS",
  },
  {
    asset: "git.svg",
    tech: "Git",
  },
  {
    asset: "github_.svg",
    tech: "Git Hub",
  },
];
</script>
<style>
#about::before,
#about::after {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
}
#about::before {
  background-image: url(/assets/mobile-curve.svg);
  width: 100%;
  height: 60px;
  top: -8%;
  background-size: cover;
}
#about::after {
  background-image: url(/assets/mobile-curve-white.svg);
  width: 100%;
  height: 60px;
  top: -6%;

  background-size: cover;
}

#about h4 {
  color: #1b023c;
  font-family: "Sansation";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 0;
}
#about p:not(#about #techStack p) {
  color: #011b32;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}

#about .image-container {
  margin-top: 40px;
}
#about .image-container img {
  max-width: 100%;
  width: 226px;
  height: 219px;
}
#about .image-container .image::before {
  content: "";
  position: absolute;
  width: 87px;
  height: 73px;
  top: 0;
  left: 0;
  border-radius: 5px;
  background: #a15aff;
  z-index: 0;
}
/* mobile */
@media (max-width: 600px){
  #about::before{
    top:-9%
  }
  #about::after{
    top:-7%
  }
}
@media (max-width: 900px) and (min-width: 600px) {
  #about::before{
    height: 120px;
    top:-15%
  }
  #about::after{
    height: 100px;
    top:-11%
  }

  
}
@media (min-width:990px){
  #about::before{
    height:250px;
    top:-31%;
  }
  #about::after{
    height: 180px;
    top:-21%;
  }
}
</style>

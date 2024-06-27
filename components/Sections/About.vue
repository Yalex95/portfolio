<template>
  <section
    class="flex flex-col justify-center items-center relative"
    id="about"
  >
    <div class="container" id="about-me">
      <div class="about-desc">
        <h4 class="uppercase">Yeris Aguilar</h4>
        <p class="my-3">{{ $t("aboutMeText") }}</p>

        <div class="relative">
          <a href="" class="btn-purple mt-3">{{ $t("downloadTextBtn") }}</a>
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
    <div id="skills" class="flex justify-between w-full px-40 py-10">
      <!-- <div v-for="item in techStack" :key="item" class="text-center">
        <img
          :src="`/assets/${item.asset}`"
          class="w-30 h-30"
          alt="wordpress icon"
        />
        <p class="mt-3 text-[#adaeaf]">{{ item.tech }}</p>
      </div> -->
      <Slider />
    </div>
    <!-- <div class="container">
          <div class="tech-slider"></div>
          <div class="skill-slider"></div>
        </div> -->
    <!-- <div class="w-10/12 flex justify-center"> 
      <Carousel />
    </div> -->
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

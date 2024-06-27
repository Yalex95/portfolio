<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="5"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
    }"
  >
    <SwiperSlide v-for="slide in techStack" :key="slide">
      <div class="text-center">
        <img
          :src="`/assets/${slide.asset}`"
          class="w-30 h-30"
          :alt="slide.tech"
        />
        <p class="mt-3 text-[#adaeaf]">{{ slide.tech }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
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
    asset: "boostrap.svg",
    tech: "Bootstrap",
  },
  {
    asset: "wp.svg",
    tech: "WordPress",
  },
  {
    asset: "github_.svg",
    tech: "Git Hub",
  },
];
</script>
<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* height: 20vh; */
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 300vh;
}
/* .swiper-cards {
  width: 540px;
  height: 540px;
} */
/* .swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
} */
</style>

<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="3"
    :loop="true"
    :space-between="10"
    :effect="'creative'"
    :autoplay="{
      delay: 3000,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }"
    
  >
    <SwiperSlide v-for="slide in techStack" :key="slide">
      <div  class="text-center flex flex-col justify-center items-center text-white py-10 px-5 ">
        <img
          :src="`./assets/${slide.asset}`"
          class="w-30 h-30"
          :alt="slide.tech"
        />
        <p class="mt-3 text-[#adaeaf] font-semiBold">{{ slide.tech }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
const techStack = [
  {
    asset: "wp.svg",
    tech: "WordPress",
  },
  {
    asset: "js.svg",
    tech: "JavaScript",
  },
  {
    asset: "vue_grey.svg",
    tech: "Vue JS",
  },
  {
    asset: "git.svg",
    tech: "Git",
  },
  {
    asset: "github_.svg",
    tech: "Git Hub",
  },
  {
    asset: "bitbucket.svg",
    tech: "Bitbucket",
  },
  {
    asset: "html.svg",
    tech: "HTML",
  },
  {
    asset: "css.svg",
    tech: "CSS",
  },
  {
    asset: "boostrap.svg",
    tech: "Bootstrap",
  },
  {
    asset: "tailwind.svg",
    tech: "Tailwind",
  },
];
</script>
<style >
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

#techStack .swiper-wrapper {
  min-width: 100vh;
  width: 200vh;
}
@media (max-width: 600px) {
  
#techStack .swiper-wrapper {
  min-width: 40vh;
  width: 46vh;
}
}
@media (max-width: 990px) and (min-width: 600px) {
  #techStack .swiper-wrapper {
  min-width: 40vh;
  width: 50vh;
}
}
@media (min-width:990px) {
  #techStack .swiper-wrapper {
  min-width: 100vh;
  width: 150vh;
}
}
</style>

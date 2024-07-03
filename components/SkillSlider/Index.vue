<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :space-between="30"
    :effect="'creative'"
    :autoplay="{
      delay: 3000,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    }"
  >
    <SwiperSlide v-for="slide in sliderSkills" :key="slide">
      <div
        class="text-center flex flex-col justify-center items-center text-white py-10 px-5 mx-5 md:mx-0 border-white border-2 rounded min-h-80"
      >
        <img
          :src="`/assets/icons/${slide.icon}`"
          class="w-14 h-14"
          :alt="slide.skill"
        />
        <p class="mt-3 text-xl font-bold">{{ slide.skill }}</p>
        <p class="mt-3 text-sm text-left">{{ slide.description }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
const props = defineProps({
  sliderSkills: {
    type: [Array, []],
  },
});

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
#skillSlider .swiper-wrapper {
  min-width: 100vh;
  width: 300vh;
}
@media (max-width: 600px) {
  #skillSlider .swiper-wrapper {
  min-width: 50vh;
  width: 50vh;
}
}
</style>

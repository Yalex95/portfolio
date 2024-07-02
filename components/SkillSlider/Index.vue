<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="3.5"
    :loop="true"
    :space-between="30"
    :effect="'creative'"
    :autoplay="{
      delay: 3000,
    }"
  >
    <SwiperSlide v-for="slide in sliderSkills" :key="slide">
      <div
        class="text-center flex flex-col justify-center items-center text-white py-12 px-5 border-white border-2 rounded"
      >
        <img
          :src="`/assets/${slide.icon}`"
          class="w-30 h-30 text-xs"
          :alt="slide.skill"
        />
        <p class="mt-3 text-lg font-bold">{{ slide.skill }}</p>
        <p class="mt-3 text-sm  line-clamp-3 text-left">{{ slide.description }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
const props = defineProps({
  sliderSkills: {
    type: [Array, []],
    // required: true
  },
})
// const skills = [
//   {
//     icon: "js.svg",
//     skill: "Skill 1",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 2",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 3",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 4",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 5",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 6",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 7",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 8",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 9",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
//   {
//     icon: "js.svg",
//     skill: "Skill 10",
//     description: "Lorem ipsum det samrot wert et amet",
//   },
// ];
</script>
<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 300vh;
}
</style>

<template>
  <div
    id="skillSlider"
    class=":my-14 bg-[#1B023C] lg:pt-32 md:pb-20 py-20 gradient lg:px-0 md:px-4"
  >
    <SkillSlider :sliderSkills="skills" />
  </div>
</template>
<script setup>
let skills = await useFetchSkills();
</script>
<style>
.gradient {
  position: relative;
}
.gradient::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#b478ff",GradientType=1);
}
</style>

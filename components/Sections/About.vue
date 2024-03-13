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
      <div class="text-center">
        <img src="/assets/wp.svg" class="w-30 h-30" alt="wordpress icon" />
        <p class="mt-3 text-[#adaeaf]">WordPress</p>
      </div>
      <div class="text-center">
        <img
          src="/assets/bitbucket.svg"
          class="w-30 h-30"
          alt="Bitbucket icon"
        />
        <p class="mt-3 text-[#adaeaf]">Bitbucket</p>
      </div>
      <div class="text-center">
        <img src="/assets/vue.svg" class="w-30 h-30" alt="vue icon" />
        <p class="mt-3 text-[#adaeaf]">Vue.js</p>
      </div>
      <div class="text-center">
        <img src="/assets/css.svg" class="w-30 h-30" alt="css icon" />
        <p class="mt-3 text-[#adaeaf]">CSS</p>
      </div>
      <div class="text-center">
        <img
          src="/assets/boostrap.svg"
          class="w-30 h-30"
          alt="bootstrap icon"
        />
        <p class="mt-3 text-[#adaeaf]">Bootstrap</p>
      </div>
      <div class="text-center">
        <img src="/assets/git.svg" class="w-30 h-30" alt="git icon" />
        <p class="mt-3 text-[#adaeaf]">Git</p>
      </div>
      <div class="text-center">
        <img src="/assets/github_.svg" class="w-30 h-30" alt="wordpress icon" />
        <p class="mt-3 text-[#adaeaf] font-semibold">WordPress</p>
      </div>
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

<template>
  <section class="flex flex-col" id="about">
    <div class="container" id="about-me">
      <div class="about-desc">
        <h4 class="uppercase">Yeris Aguilar</h4>
        <p>{{ $t('aboutMeText') }}</p>

        <div class="button-container">
          <a href="" class="btn-purple">{{ $t('downloadTextBtn') }}</a>
        </div>
      </div>
      <div class="image-container">
        <div class="image">
          <img src="/assets/img.png" alt="yeris image" />
        </div>
      </div>
    </div>
    <!-- skills -->
    <!-- <div class="container">
          <div class="tech-slider"></div>
          <div class="skill-slider"></div>
        </div> -->
    <div class="w-10/12 flex justify-center">
      <Carousel />
    </div>
  </section>
</template>

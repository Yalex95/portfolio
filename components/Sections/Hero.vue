<template>
  <section
    class="flex flex-col w-full text-white justify-center items-center relative"
    id="hero"
  >
    <div class="xl:w-4/12 text-center">
      <h6 class="uppercase"><span>Yeris Aguilar -</span> front end</h6>
      <h1 class="uppercase mb-3">
        Web <br class="display" />
        developer
      </h1>
      <p>
        {{ $t("heroDescription") }}
      </p>
      <div class="btn-container mt-5">
        <a href="#contact" class="btn cursor-pointer z-10 relative">{{
          $t("contactText")
        }}</a>
      </div>
    </div>
  </section>
</template>

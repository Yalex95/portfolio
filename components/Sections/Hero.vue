<template>
  <section
    class="flex flex-col w-full text-white justify-center items-center relative"
    id="hero"
  >
    <div class="w-10/12 md:w-6/12 xl:w-4/12 md:text-center">
      <h6 class="uppercase"><span>Yeris Aguilar -</span> front end</h6>
      <h1 class="uppercase mb-3">
        Web <br class="display" />
        developer
      </h1>
      <p>
        {{ $t("heroDescription") }}
      </p>
      <div
        class="btn-container mt-5 relative flex-row flex md:justify-center gap-2"
      >
        <a href="/#contact" class="btn cursor-pointer z-10">{{
          $t("contactText")
        }}</a>
        <div class="click-here relative"></div>
      </div>
    </div>
  </section>
</template>
<style>
#hero {
  height: 600px;
  background: rgb(52, 21, 93);
  background: -moz-linear-gradient(
    0deg,
    rgba(52, 21, 93, 1) 0%,
    rgba(30, 4, 64, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(52, 21, 93, 1) 0%,
    rgba(30, 4, 64, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(52, 21, 93, 1) 0%,
    rgba(30, 4, 64, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#34155d",endColorstr="#1e0440",GradientType=1);
}
#hero span {
  display: none;
}
#hero::before {
  content: "";
  position: absolute;
  background-image: url(/assets/Hero-Pattern.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  bottom: 0;
}
#hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 74px;
  background-image: url(/assets/mobile-curve-p.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

#hero .click-here::after {
  content: "Click here";
  background-image: url(/assets/white_arrow.svg);
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: left;
  position: absolute;
  font-size: 1.3rem;
  height: 55px;
  width: 80px;

  font-family: "Zeyada";
}
#hero h1 {
  font-family: "Sansation";
  font-size: 40px;
  font-weight: 700;
}
#hero h6 {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
}
#hero .btn {
  display: inline-flex;
}

/* mobile */
@media (max-width: 600px){
  #hero::after{
    height: 100px;
  }
}
/* ipad */
@media (max-width: 900px) and (min-width: 600px) {
  #hero::after{
    height: 150px;
  }
  
}
@media(min-width: 990px) {
  #hero::after{
    height:250px;
    background-size: cover;
  bottom: 5%;
  }
  #hero::before{
    background-image: url(/assets/Hero-Pattern-desktop.svg);
    height: 600px;
    background-size: cover;
  }
  #hero{
    min-height: 600px;
    height: 800px;
    padding-bottom: 3rem;
  }
  
}
</style>

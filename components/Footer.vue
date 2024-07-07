<template>
  <div>
    <footer class="footer">
      <div class="container flex-col md:flex-row flex">
        <div class="w-full md:w-1/3">
          <p class="uppercase">Front End web Developer</p>
          <p class="text-2xl capitalize">Yeris Alejandra Aguilar</p>
          <p><i class="location"></i>Tijuana, MX</p>

          <ul class="social mt-3 hidden md:inline-flex">
            <li v-for="link in links" :key="link.alt">
              <a :href="link.url" class="linkedin">
                <img :src="link.icon" :alt="link.alt"
              /></a>
            </li>
          </ul>
        </div>
        <div class="flex-col justify-center md:items-center flex md:flex-row md:w-1/3">
          <ul class="quick-links">
            <li v-for="nav in navigation" :key="nav.name">
              <a class="decoration-solid underline" :href="nav.href">{{ nav.name }}</a>
            </li>
          </ul>

        </div>
        <div class="inline-flex md:hidden">
          <ul class="social mt-3 inline-flex">
            <li v-for="link in links" :key="link.alt">
              <a :href="link.url" class="linkedin">
                <img :src="link.icon" :alt="link.alt"
              /></a>
            </li>
          </ul></div>
        <div class="hidden md:block md:w-1/3 lg:flex flex-col items-center">
          <p class="text-2xl font-semibold">Get Started TODAY!</p>
          <a href="./#contact" class="btn-white mt-2 text-center"> contact me</a>
        </div>
      </div>
    </footer>

    <NavFloatingNav />
  </div>
</template>
<script setup>
const navigation = [
  { name: "Home", href: "#hero", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
];

const links = [
  {
    url: "https://www.linkedin.com/in/yeris-aguilar/",
    icon: "./assets/linkedin_nav.svg",
    alt: "LinkedIn icon",
  },
  {
    url: "mailto:yerisaguilar95@gmail.com",
    icon: "./assets/email_nav.svg",
    alt: "Email icon",
  },
  {
    url: "tel:+529632337458",
    icon: "./assets/phone_nav.svg",
    alt: "Phone icon",
  },
  {
    url: "https://github.com/Yalex95",
    icon: "./assets/github_nav.svg",
    alt: "Github icon",
  },
];
</script>
<style>


/* Footer */
.footer {
  color: #fff;
  padding: 50px 0;
  background: #1b023c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
}
.footer ul.social {
  /* display: inline-flex; */
  list-style: none;
  padding: 0;
  gap: 1rem;
}

.footer .btn-white {
  width: fit-content;
}
</style>
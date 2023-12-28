<template>
  <div>
    <footer class="footer">
      <div class="container flex">
        <div class="w-1/3">
          <p class="uppercase">Front End web Developer</p>
          <p class="text-2xl capitalize">Yeris Alejandra Aguilar</p>
          <p><i class="location"></i>Tijuana, MX</p>

          <ul class="social mt-3">
            <li v-for="link in links" :key="link.alt">
              <a :href="link.url" class="linkedin">
                <img :src="link.icon" :alt="link.alt"
              /></a>
            </li>
          </ul>
        </div>
        <div class="flex-col justify-center items-center hidden md:flex w-1/3">
          <ul class="quick-links">
            <li v-for="nav in navigation" :key="nav.name">
              <a :href="nav.href">{{ nav.name }}</a>
            </li>
          </ul>
        </div>
        <div class="hidden md:block w-1/3">
          <p class="text-2xl">Get Started TODAY!</p>
          <a href="" class="btn-white mt-2"> contact me</a>
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
  { url: "", icon: "/assets/linkedIn.svg", alt: "LinkedIn icon" },
  { url: "", icon: "/assets/email.svg", alt: "Email icon" },
  { url: "", icon: "/assets/phone.svg", alt: "Phone icon" },
  { url: "", icon: "/assets/github.svg", alt: "Github icon" },
];
</script>

<template>
  <div>
    <div class="links flex">
      <div>
        <!-- contact links -->
        <ul class="flex flex-col gap-y-4">
          <li v-for="link in links" :key="link.alt" class="">
            <a :href="link.url" class=" rounded-lg flex justify-center items-center w-10 h-10" :class="[`bg-[url(${link.icon})] hover:bg-[url(${link.hover})]`]">
              <!-- <img :src="link.icon" :alt="link.alt" /> -->
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const links = [
  { url: "", icon: "/assets/linkedin.png",hover:"/assets/linkedin.png", alt: "LinkedIn icon" },
  { url: "", icon: "/assets/email.png",hover:"/assets/email.png", alt: "Email icon" },
  { url: "", icon: "/assets/phone.png",hover:"/assets/phone.png", alt: "Phone icon" },
  { url: "", icon: "/assets/github.png",hover:"/assets/github.png", alt: "Github icon" },
];
</script>
<style>
.links {
  border-radius: 0px 20px 50px 0px;
  background: #a15aff;
  position: fixed;
  top: 20%;
  padding: 33px 19px;
  z-index: 1;
}
</style>

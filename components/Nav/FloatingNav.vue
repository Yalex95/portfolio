<template>
  <div>
    <div class="links flex">
      <div>
        <!-- contact links -->
        <ul class="flex flex-col gap-y-4">
          <li
            v-for="link in links"
            :key="link.alt"
            class="rounded-lg flex justify-center items-center w-10 h-10 hover:bg-[#1F0642]"
          >
            <a
              :href="link.url"
              class="bg-contain bg-center w-6 h-6 bg-no-repeat"
              :style="{
                'background-image': `url(${link.icon})`,
              }"
            >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const links = [
  {
    url: "https://www.linkedin.com/in/yeris-aguilar/",
    icon: "/assets/linkedin_nav.svg",
    alt: "LinkedIn icon",
  },
  {
    url: "mailto:yerisaguilar95@gmail.com",
    icon: "/assets/email_nav.svg",
    alt: "Email icon",
  },
  {
    url: "tel:+529632337458",
    icon: "/assets/phone_nav.svg",
    alt: "Phone icon",
  },
  {
    url: "https://github.com/Yalex95",
    icon: "/assets/github_nav.svg",
    alt: "Github icon",
  },
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

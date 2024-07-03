<template>
  <div class="flex md:hidden justify-between items-center py-2  px-4 bg-[#A15AFF]">
    <div class="block">
      <label class="inline-flex items-center cursor-pointer">
        <img src="/assets/icons/language.png" alt="world icon" class="mr-3" />
        <input
          type="checkbox"
          v-model="isChecked"
          class="sr-only peer"
          @change="handleCheckboxChange"
        />
        <div
          :class="{
            'peer-checked:after:translate-x-full': isChecked,
            'rtl:peer-checked:after:-translate-x-full': isChecked,
          }"
          class="flex gap-1 justify-center items-center dark:bg-transparent ring-2 ring-[#A15AFF] relative w-11 h-6 bg-transparent peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#A15AFF] dark:peer-focus:ring-[#A15AFF] rounded-full peer peer-checked:after:border-[#A15AFF] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#A15AFF] after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-transparent peer-checked:bg-transparent"
        >
          <p class="text-white text-xs">ES</p>
          <p class="text-white text-xs">EN</p>
        </div>
      </label>
    </div>
    <div>
      <Links :links="links" wrapperClass=" flex gap-2"/>
      <!-- <ul class="flex  gap-2">
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
      </ul> -->
    </div>
  </div>
</template>
<script setup>
import Cookie from "cookie-universal";
import { useI18n } from "vue-i18n";
const isChecked = ref(false);
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
const handleCheckboxChange = (e) => {
  isChecked.value = e.target.checked;

  if (isChecked.value) {
    translate.locale.value = "es";
    $cookies.set("locale", "es");
  }
  if (!isChecked.value) {
    translate.locale.value = "en";
    $cookies.set("locale", "en");
  }
};
</script>

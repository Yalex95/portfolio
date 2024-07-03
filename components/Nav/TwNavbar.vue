<template>
  
  <Disclosure
    as="nav"
    :class="[{ scrolled: scrolled }, 'navbar']"
    id="navbar"
    v-slot="{ open }"
  >
  <NavMobileNav/>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current ? '' : ' hover:text-[#a15aff]',
                  'rounded-md px-3 py-2 text-sm font-medium  text-white',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden sm:block">
            <label class="inline-flex items-center cursor-pointer">
              <img
                src="/assets/icons/language.png"
                alt="world icon"
                class="mr-3"
              />
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
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import Cookie from "cookie-universal";
import { useI18n } from "vue-i18n";
const $cookies = Cookie();
let translate = useI18n();
// import useScrollClass from "~/plugins/scroll";
const scrolled = ref(false);
const isChecked = ref(false);
const navigation = [
  { name: "Home", href: "#hero", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const handleScroll = () => {
  const navbar = document.getElementById("navbar"); // Replace 'navbar' with your actual navbar ID
  if (navbar) {
    const scrollPosition = window.scrollY || window.pageYOffset;
    scrolled.value = scrollPosition > 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
<style scoped>
.navbar {
  background-color: transparent;
  position: fixed;
  z-index: 3;
  width: 100%;
}
.scrolled {
  background-color: #190039;
  position: fixed;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example box shadow */
}
</style>

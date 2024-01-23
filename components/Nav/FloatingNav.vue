<template>
  <div>
    <div class="links flex">
      <div>
        <!-- contact links -->
        <ul class="flex flex-col gap-y-4">
          <li v-for="link in links" :key="link.alt">
            <a :href="link.url">
              <img :src="link.icon" :alt="link.alt" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const links = [
  { url: "", icon: "/assets/linkedIn.svg", alt: "LinkedIn icon" },
  { url: "", icon: "/assets/email.svg", alt: "Email icon" },
  { url: "", icon: "/assets/phone.svg", alt: "Phone icon" },
  { url: "", icon: "/assets/github.svg", alt: "Github icon" },
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

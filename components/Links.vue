<template>
  
  <ul :class="wrapperClass">
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
</template>
<script setup>
const props = defineProps({
  links:{
    type: Array,
    default:[]
  },
  wrapperClass:{
    type:String,
    default:''
  }
})
</script>
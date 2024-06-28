<template>
  <NuxtLayout>
    <div>
      <SectionsHero />
      <SectionsAbout />
      <SectionsSkills />
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <SectionsProjects :projects="data.projects"
      /></ClientOnly>

      <!-- <SectionsContact /> -->
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
useHead({
  title: "Yeris Aguilar - FrontEnd dev",
  meta: [{ name: "description", content: "My amazing site." }],
});

import { onMounted } from "vue";
let data = ref([]);
// let data = useState("data", async () => await getProfileData());

const getProfileData = async () => {
  try {
    const response = await fetch("/profileData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();

    data.value = jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// await getProfileData();

// onMounted(async () => {
await getProfileData();
// });
</script>

<style></style>

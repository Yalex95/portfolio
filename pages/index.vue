<template>
  <NuxtLayout>
    <div>
      <SectionsHero />
      <SectionsAbout />
      <SectionsSkills />
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <SectionsProjects 
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
</script>

<style></style>

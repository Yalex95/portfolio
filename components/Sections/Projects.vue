<template>
  <section class="flex justify-center items-center pt-20" id="projects">
    <div class="container">
      <h4 class="uppercase text-[#011b32]">{{ $t("showcase") }}</h4>
      <div class="recent-project">
        <div class="recent-project-desc">
          <h5 class="uppercase text-[#a15aff]">{{ $t("recentProject") }}</h5>
          <h4 class="uppercase">{{ $t("projectName") }}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
            non possimus laboriosam animi saepe voluptatem nobis quia,
            necessitatibus id deleniti doloribus quas expedita reiciendis
            corrupti veritatis porro, accusamus assumenda?
          </p>
          <a href="" class="btn-purple">Learn more</a>
        </div>
        <div class="project bg-[url(/assets/project-recent.png)]">
          <a href="" class="btn">GitHub</a>
        </div>
      </div>
      <div class="projects-filter">
        <button
          class="btn-purple-border"
          :class="[params.category === 'all' ? 'active' : '']"
          @click="onCatChange('all')"
        >
          All Projects
        </button>
        <button
          v-for="(category, index) in uniqueCats"
          :key="index"
          class="btn-purple-border capitalize"
          :class="[params.category === category ? 'active' : '']"
          @click="onCatChange(category)"
        >
          {{ category }}
        </button>
      </div>
      <div class="projects-container">
        <div
          v-for="(project, index) in filteredItems"
          :key="index"
          class="card-wrapper rounded-md flex justify-end items-center"
          :style="`background-image: url(${project.featured_img})`"
        >
          <div
            class="w-full static-card flex-col justify-center items-center text-center text-white font-bold"
          >
            <img
              class="w-14 h-14 mb-5 mx-auto"
              :src="`/assets/${project.icon}`"
              :alt="project.category"
            />
            <p class="name uppercase font-bold">{{ project.name }}</p>
          </div>
          <div class="card-content text-white w-full flex-col p-5">
            <img
              class="w-14 h-14 mb-5"
              :src="`/assets/${project.icon}`"
              :alt="project.category"
            />
            <p class="description text-base mb-6 line-clamp-4">{{ project.description }}</p>
            <a
              class="rounded border-2 border-white py-2 px-4 capitalize font-bold"
              >Go to site</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
//TODO: add styling and real data
const route = useRoute();
const router = useRouter();

let uniqueCats = await useFetchCategories();
let params = ref({ category: "all" });

const { data: filteredItems, refresh } = await useFetchProjects(params.value);

const onCatChange = (cat) => {
  params.value.category = cat;
  router.push({
    query: {
      category: cat,
    },
  });
};
</script>
<style>
#projects .container h4 {
  font-family: Sansation;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
#projects .container h5 {
  font-family: Sansation;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
#projects .container .project {
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 132px;
  flex-shrink: 0;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: auto;
}
#projects .container .project::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(1, 27, 50, 0.9) 45.31%,
    rgba(1, 27, 50, 0) 91.44%
  );
}
#projects .container .projects-filter {
  margin-top: 54px;
  margin-bottom: 34px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 16px;
}

#projects .container .projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 20rem;
  gap: 3rem;
}

#projects .container .projects-container .project-container {
  padding: 36px 22px 37px;
}

#projects
  .container
  .projects-container
  .project-container
  .project-body
  .name {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 700;
}

.card-wrapper {
  position: relative;
  overflow: hidden;
}
.card-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(30, 7, 62, 0.6);
}
.static-card {
  z-index: 1;
}
.card-content {
  background-color: rgba(30, 7, 62, 0.8);
  position: absolute;
  bottom: 0;
  height: 0%;

  margin-bottom: -134px;
  transition: all 0.5s ease;
  z-index: 1;
}

.card-wrapper:hover .card-content {
  margin-bottom: 0px;
  height: 100%;
}
.card-wrapper:hover .static-card {
  visibility: hidden;
}

.card-content .e-con-inner {
  transition: all 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.card-wrapper:not(:hover) .card-content .e-con-inner {
  animation: fadeIn 1.5s ease forwards;
}

.card-wrapper:hover .card-content .e-con-inner {
  justify-content: end;
}

@media (max-width: 1024px) {
  .card-content {
    height: 54%;
  }
}
</style>

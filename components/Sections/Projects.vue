<template>
  <section class="flex justify-center items-center pt-20" id="projects">
    <div class="container">
      <h4 class="uppercase text-[#011b32] mb-8">{{ $t("showcase") }}</h4>
      <div class="recent-project">
        <div class="recent-project-desc">
          <h5 class="uppercase text-[#a15aff]">{{ $t("recentProject") }}</h5>
          <h4 class="uppercase">{{ $t("projectName") }}</h4>
          <p class="mb-4">
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
          :class="[route.query.category === 'all' ? 'active' : '']"
          @click="onCatChange('all')"
        >
          All Projects
        </button>
        <button
          v-for="(category, index) in uniqueCats"
          :key="index"
          class="btn-purple-border capitalize"
          :class="[route.query.category === category ? 'active' : '']"
          @click="onCatChange(category)"
        >
          {{ category }}
        </button>
      </div>
      <div class="projects-container">
        <div
          v-for="(project, index) in filteredItems"
          :key="index"
          class="card-wrapper rounded-md flex justify-end items-center bg-cover bg-no-repeat bg-center cursor-pointer"
          :style="`background-image: url(${project.featured_img})`"
        >
          <div
            class="w-full static-card flex-col justify-center items-center text-center text-white font-bold"
          >
            <img
              class="w-14 h-14 mb-5 mx-auto"
              :src="`${project.icon}`"
              :alt="project.category"
            />
            <p class="name uppercase font-bold text-xl">{{ project.name }}</p>
          </div>
          <!-- card hover -->
          <div
            class="card-content text-white w-full flex-col px-5 py-10 md:justify-between flex"
          >
            <div class="flex-col gap-5 flex">
              <img
                class="w-14 h-14"
                :src="`${project.icon}`"
                :alt="project.category"
              />
              <p class="name uppercase font-bold text-xl block md:hidden mb-4">
                {{ project.name }}
              </p>
              <p class="description text-sm mb-6 line-clamp-6 hidden md:block">
                {{ project.description }}
              </p>
            </div>
            <div class="flex justify-between">
              <a
                v-show="project.github_link"
                :href="project.github_link"
                target="_blank"
                class="bg-[#A077D9] rounded border-2 border-[#A077D9] py-2 px-4 capitalize font-bold flex gap-3 items-center"
                ><img
                  src="/assets/github_white.svg"
                  alt="github"
                  class="w-6 h-6"
                />GitHub</a
              >
              <a
                v-show="project.link"
                :href="project.link"
                target="_blank"
                class="rounded border-2 border-white py-2 px-4 capitalize font-bold flex gap-2 items-center"
                >Go to site<ArrowLongRightIcon class="w-10 h-8"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const router = useRouter();

let params = ref({ category: "all" });

// const { data: filteredItems, refresh } = await useFetchProjects(params.value);
let projectsList = [
  {
    name: "TO-DO List",
    icon: "./assets/react-icon.svg",
    description:
      "This project was made with Firebase real time data base and React js framework. *Adds TODO items to database *Delete TODO items to database *updates completed items",
    category: "react",
    link: "https://yalex95.github.io/TodoListCrud/",
    github_link: "",
    featured_img: "./assets/project.png",
  },
  {
    name: "Portfolio",
    icon: "./assets/vue.svg",
    description: "This project was made with Nuxt 3 js framework.",
    category: "vue",
    link: "https://yalex95.github.io/portfolio/",
    github_link: "https://github.com/Yalex95/portfolio",
    featured_img: "./assets/portafolio-featured-img.jpg",
  },
  {
    name: "Budget Controller",
    icon: "./assets/react-icon.svg",
    description: "This project was made with React js framework.",
    category: "react",
    link: "https://yalex95.github.io/budget/",
    github_link: "https://github.com/Yalex95/budget",
    featured_img: "./assets/project.png",
  },
  {
    name: "Anime Rest API",
    icon: "./assets/react-icon.svg",
    description: "This project was made with React js framework.",
    category: "react",
    link: "https://yalex95.github.io/web-app/",
    github_link: "https://github.com/Yalex95/web-app",
    featured_img: "./assets/project.png",
  },
];
let filteredItems = ref([]);

let uniqueCats = [...new Set(projectsList.map((obj) => obj.category))];

const getProjects = (cat) => {
  console.log(cat);
  if (cat && cat != "all") {
    console.log("different");
    filteredItems.value = projectsList.filter((project) => {
      return project.category == cat.toLowerCase();
    });
  } else {
    filteredItems.value = projectsList;
  }
};

getProjects(route.query.category || "all");


const onCatChange = (cat) => {
  console.log(cat);
  params.value.category = cat;
  router.push({
    query: {
      category: cat,
    },
  });
  getProjects(cat);
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
@media (max-width: 600px) {
  #projects .container .projects-container {
    grid-auto-rows: 16rem;
  }
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

@media (max-width: 1024px) and (min-width: 990px) {
  .card-content {
    height: 54%;
  }
}
@media (max-width: 600px) {
  .card-content {
    height: 35%;
  }
}
</style>

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
        <button class="btn-purple-border active">All Projects</button>
        <button class="btn-purple-border">React Js</button>
        <button class="btn-purple-border">WordPress</button>
        <button class="btn-purple-border">Vue Js</button>
      </div>
      <div class="projects-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              :src="`/assets/${project.icon}`"
              :alt="project.category"
            />
            <p class="name">{{ project.name }} {{ index }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="counter">1/2</div> -->
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  projects: {
    default: () => [],
    type: Array,
  },
});

let selectedCategory = ref(0);
console.log(props.projects);
const uniqueCats = [...new Set(props.projects.map((obj) => obj.category))];
console.log(uniqueCats);
</script>
<style>
#projects .container h4 {
  /* color: #011b32; */
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
  position: relative;
  border-radius: 5px;
  padding: 36px 22px 37px;
}
#projects .container .projects-container .project-container::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(30, 7, 62, 0.7);
}
#projects
  .container
  .projects-container
  .project-container
  .project-body
  .img-fluid {
  width: 47px;
  height: 42px;
}
#projects
  .container
  .projects-container
  .project-container
  .project-body
  .name {
  color: #fff;
  font-family: "Inter";
  font-size: 18px;
  font-weight: 700;
}
#projects .container .projects-container .project-container .project-body {
  position: relative;
  z-index: 1;
}
</style>

<template>
  <section class="" id="projects">
    <div class="container">
      <h4 class="uppercase">{{ $t('showcase') }}</h4>
      <div class="recent-project">
        <div class="recent-project-desc">
          <h5 class="uppercase">{{ $t('recentProject') }}</h5>
          <h4 class="uppercase">project name</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
            non possimus laboriosam animi saepe voluptatem nobis quia,
            necessitatibus id deleniti doloribus quas expedita reiciendis
            corrupti veritatis porro, accusamus assumenda?
          </p>
          <a href="" class="btn-purple">Learn more</a>
        </div>
        <div
          class="project"
          style="background: url(/assets/project-recent.png)"
        >
          <a href="" class="btn">GitHub</a>
        </div>
      </div>
      <div class="projects-filter">
        <button class="btn-purple-border active">All Projects</button>
        <button class="btn-purple-border">React JS</button>
        <button class="btn-purple-border">Wordpress</button>
      </div>
      <div class="projects-container">
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
        <div
          class="project-container"
          style="background-image: url(/assets/project.png)"
        >
          <div class="project-body">
            <img
              class="img-fluid"
              src="/assets/react-icon.svg"
              alt="project tech"
            />
            <p class="name">Project Name</p>
          </div>
        </div>
      </div>
      <div class="counter">1/2</div>
    </div>
  </section>
</template>

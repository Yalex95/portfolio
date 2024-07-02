import projects from "@/data/projects.json";

export default defineEventHandler((event) => {
  const { cat } = event.context.params;
  let filteredProjects = projects;
  if (cat != "" || cat != "all") {
    filteredProjects = filteredProjects.filter((project) => {
      return project.category.toLocaleLowerCase === cat.toLocaleLowerCase;
    });
  }

  return filteredProjects;
});

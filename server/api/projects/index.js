import projects from "@/data/projects.json";

export default defineEventHandler((event) => {
  const { category } = getQuery(event);
  let filteredProjects = projects;
  if (category != "" && category != "all") {
    filteredProjects = filteredProjects.filter((project) => {
      return project.category.toLowerCase() === category.toLowerCase();
    });
  }
  return filteredProjects;
});

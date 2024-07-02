import projects from "@/data/projects.json";

export default defineEventHandler((event) => {
  
  let uniqueCats = [...new Set(projects.map((obj) => obj.category))];
  

  return uniqueCats;
});

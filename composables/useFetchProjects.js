export default async (cat) => {
  // Assuming `useFetch` is a function provided by Nuxt Composition API or another library
 
  const { data, error, status, refresh } = await useFetch(`/api/projects`, {
    params: cat,
  });
  if (error.value && status.value !='success') {
    console.error("Error fetching projects:", error.value);
    return { data: [], refresh, status }; // Return empty data array on error
  }
  return { data, refresh, status };
};

export default async (category) => {
  console.log(category);
  const { data, error, status, refresh } = await useFetch(`/api/projects/${category}`);
  if (error.value) return;
  return {data,refresh,status};
};

export default async () => {
  const { data, error, status } = await useFetch(`/api/skills`);
  if (error.value) return;
  return data;
};

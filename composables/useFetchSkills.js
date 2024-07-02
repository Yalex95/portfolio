export default async () => {
  const { data, error, status } = await useFetch(`/api/skills`);
  if (error.value) return;
  console.log(data);
  return data;
};

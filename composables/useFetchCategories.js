export default async () => {
  const { data, error, status } = await useFetch(`/api/categories`);
  if (error.value) return;
  return data;
};

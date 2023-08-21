let idCounter = 0;

export const generateUniqueId = () => {
  idCounter += 1;
  return `id-${idCounter}`;
};
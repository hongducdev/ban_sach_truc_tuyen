export const convertCurr = (curr) => {
  const newCurr = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(curr);

  return newCurr;
};

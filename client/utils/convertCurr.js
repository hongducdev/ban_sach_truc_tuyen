export const convertCurr = (curr) => {
  if(curr === 0) return 0;
  else {
    const newCurr = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(curr);

    return newCurr;
  }
};

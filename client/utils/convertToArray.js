// convert object to array
export const convertToArray = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
};

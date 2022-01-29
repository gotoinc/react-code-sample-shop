export const getTotalPrice = (arr: any[]) =>
   arr.reduce((sum, obj) => obj.price + sum, 0);

export const getSum = (obj: any, path: string) => {
   const [firstKey, ...keys] = path.split('.');
   return keys.reduce((val, key) => {
      return val[key];
   }, obj[firstKey]);
};

export const getTotalSum = (obj: any, path: string) => {
   return Object.values(obj).reduce((sum, obj) => {
      const value = getSum(obj, path);
      return sum + value;
   }, 0);
};
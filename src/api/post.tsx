import { instance } from "./config";

export const getAll = () => {
   const url = `/posts`;
   return instance.get(url);
}
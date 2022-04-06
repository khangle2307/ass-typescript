import { instance } from "./config";

export const getAll = () => {
   const url = `/users`;
   return instance.get(url);
}
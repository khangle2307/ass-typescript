import { instance } from "./config";

export const getAll = () => {
   const url = '/categories';
   return instance.get(url);
}
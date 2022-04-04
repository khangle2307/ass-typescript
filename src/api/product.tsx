import { instance } from "./config";

export const getAll = () => {
   const url = `/products`;
   return instance.get(url);
}
import { CategoryType } from "../types/category";
import { instance } from "./config";

export const getAll = () => {
   const url = '/categories';
   return instance.get(url);
}

export const create = (category : CategoryType) => {
   const url = '/categories';
   return instance.post(url,category)
}


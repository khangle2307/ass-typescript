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

export const getById = (_id : string) => {
   const url = `/categories/${_id}`;
   return instance.get(url);
}

export const updateById = (category) => {
   const url = `/categories/${category._id}`;
   return instance.put(url,category);
}



import { ProductType } from "../types/product";
import { instance } from "./config";

export const getAll = () => {
   const url = `/products`;
   return instance.get(url);
}

export const create = (product : ProductType) => {
   const url = `/products`;
   return instance.post(url,product);
}
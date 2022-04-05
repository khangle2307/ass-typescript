import { ProductType } from "../types/product";
import { instance } from "./config";
import { isAuthenticate } from "../utils/localstorage";

const { token, user} = isAuthenticate();

export const getAll = () => {
   const url = `/products`;
   return instance.get(url);
}

export const create = (product : ProductType) => {
   const url = `/products/${user._id}`;
   return instance.post(url,product,{
      headers : {
         "Authorization" : `Bearer ${token}`
      }
   });
}
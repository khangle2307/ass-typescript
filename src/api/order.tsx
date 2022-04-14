import { instance } from "./config";

export const getAll = () => {
   const url = `/orders`;
   return instance.get(url)
}

export const getById = (_id : string) => {
   const url = `/orders/${_id}`;
   return instance.get(url);
}

export const create = (order : any) => {
   const url = `/orders`;
   return instance.post(url,order)
}
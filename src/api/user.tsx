import { instance } from "./config";

export const getAll = () => {
   const url = `/users`;
   return instance.get(url);
}

export const removeById = (_id : string) => {
   const url = `/users/${_id}`;
   return instance.delete(url);
}


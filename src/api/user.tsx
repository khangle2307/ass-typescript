import { instance } from "./config";
import { UserType } from '../types/user';

export const getAll = () => {
   const url = `/users`;
   return instance.get(url);
}

export const getById = (_id : string) => {
   const url = `/users/${_id}`;
   return instance.get(url);
}

export const updateById = (user : UserType) => {
   const url = `/users/${user._id}`;
   return instance.put(url,user)
}

export const removeById = (_id : string) => {
   const url = `/users/${_id}`;
   return instance.delete(url);
}


import { PostType } from "../types/post";
import { isAuthenticate } from "../utils/localstorage";
import { instance } from "./config";

const { token , user } = isAuthenticate();

export const getAll = () => {
   const url = `/posts`;
   return instance.get(url);
}

export const getById = (_id : string) => {
   const url = `/posts/${_id}`;
   return instance.get(url);
}

export const add = (post : PostType) => {
   const url = `/posts/${user._id}`;
   return instance.post(url,post,{
      headers : {
         "Authorization" : `Bearer ${token}`
      }
   });
}

export const updateById = (post : PostType) => {
   const url = `/posts/${post._id}`;
   return instance.put(url,post);
}

export const removeById = (_id : string) => {
   const url = `/posts/${_id}`;
   return instance.delete(url);
}
import { instance } from "./config";

export const signup = (data) => {
   const url = '/signup';
   return instance.post(url,data);
}

export const signin = (data) => {
   const url = '/signin';
   return instance.post(url,data);
}
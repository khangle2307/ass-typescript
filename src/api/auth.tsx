import { instance } from "./config";

export const signup = (data) => {
   const url = '/signup';
   return instance.post(url,data);
}
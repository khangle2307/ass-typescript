import { instance } from './config';
import { isAuthenticate } from '../utils/localstorage';
import { SlideType } from '../types/slide';

const { token , user} = isAuthenticate()

export const getALl = () => {
   const url = `/slides`;
   return instance.get(url)
}

export const createOne = (slide : SlideType) => {
   const url = `/slides/${user._id}`;
   return instance.post(url,slide,{
      headers : {
         "Authorization" : `Bearer ${token}`
      }
   })
}

export const getById = (_id : string) => {
   const url = `/slides/${_id}`;
   return instance.get(url)
}

export const updateById = (slide : SlideType) => {
   const url = `/slides/${slide._id}`;
   return instance.put(url,slide)
}

export const deleteById = (_id : string) => {
   const url = `/slides/${_id}`;
   return instance.delete(url)
}
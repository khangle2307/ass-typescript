import axios from "axios";
import { ProductType } from "../types/product";

export const uploadImage = async (data) => {
   const file = data.image[0];
   const CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/ass1/image/upload';
   const formData = new FormData();
   formData.append('file', file);

   formData.append('upload_preset', "exfo2aep");
   const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    });
   
   return response.data;
}
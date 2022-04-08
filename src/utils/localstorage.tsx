export const isAuthenticate = () => {
   if(typeof window == "undefined") return false;
   if(localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') as string);
   }else {
      return false
   }
}
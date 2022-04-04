export const isAuthenticate = () => {
   if(!localStorage.getItem('user')) return;
   return localStorage.getItem('user');
}
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';

type PrivateRouterProps = {
   children : JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const user = useSelector((state : any) => state.auth.data);
  console.log(user);
  if(!user) {
      return <Navigate to={"/signin"}/>
  }else{
   if(user.role === 1){
     return <Navigate to={"/admin"}/>
   }
  }
  
  return props.children;
}

export default PrivateRouter
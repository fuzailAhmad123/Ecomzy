import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    // const {token} = useSelector ((state) => state.auth);
    const token ="";
    if(token !== null){
      return children;
    }
    else{
      return <Navigate to="/login"/>;
    }
}

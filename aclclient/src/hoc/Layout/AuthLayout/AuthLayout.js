import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import AuthFooter from './AuthFooter';
import AuthHeader from './AuthHeader';
  
const AuthLayout = ({ children }) => (                         
    <div className="container-fluid p-0 border">
      <AuthHeader />
			{children}
      <AuthFooter />
    </div>  
);  
  
const AuthLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <AuthLayout>  
        <Component {...matchProps} />  
    </AuthLayout>  
  )} />  
)  
};  
  
export default AuthLayoutRoute;  
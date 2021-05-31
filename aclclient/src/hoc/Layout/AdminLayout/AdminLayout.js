import React, { Component } from 'react';  
import { Route } from 'react-router-dom'; 
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';

const AdminLayout = ({ children }) => (                         
    <div>
      <AdminHeader />
      <div className="p-1 border">
        <div className="row mt-1 p-1 adminLayout" >
            <div className="col-lg-2">
              <AdminMenu />
            </div>
            <div className="col-lg-10 border rounded">
              {children}
            </div>
        </div>
      </div>
      <AdminFooter />
    </div>  
);  
  
const AdminLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <AdminLayout>  
        <Component {...matchProps} />  
    </AdminLayout>  
  )} />  
)  
};  
  
export default AdminLayoutRoute;  

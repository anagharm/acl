import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import SignUpInLayoutRoute from './AuthLayout/AuthLayout'
import AdminLayoutRoute from './AdminLayout/AdminLayout'
/** Components **/   
import SignIn from '../../components/Auth/SignIn';
import SignUp from '../../components/Auth/SignUp';
import ForgotPassword from '../../components/Auth/ForgotPassword';
import VerifyOTP from '../../components/Auth/VerifyOTP';
import RegisterUser from '../../components/Users/RegisterUser';


class LayoutCall extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/signin" />  
          </Route>  
          <SignUpInLayoutRoute path="/signin" component={SignIn} />  
          <SignUpInLayoutRoute path="/signup" component={SignUp} />  
          <SignUpInLayoutRoute path="/forgotpassword" component={ForgotPassword} />  
          <SignUpInLayoutRoute path="/verifyopt" component={VerifyOTP} />  

          <AdminLayoutRoute path="/user/register" component={RegisterUser} />
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default LayoutCall;
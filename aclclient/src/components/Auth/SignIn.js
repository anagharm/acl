import React, { Component } from 'react'
import './AuthCss.css'

export default class SignIn extends Component {
    render() {
        return (
            <div className="authSign">
                <div className="row">
                    <div className="col-lg-6 authSignImgDiv">
                    </div>
                    <div className="col-lg-6 authSignInFormDiv">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

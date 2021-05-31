import React, { Component } from 'react'
import './AdminCss.css'

export default class AdminHeader extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg AdminHeader">
                    <div className="container">
                        <span href="#" className="navbar-brand text-uppercase font-weight-bold">ACL</span>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <span className="nav-link font-weight-bold">Anagha R
                                        <span className="sr-only">(current)</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

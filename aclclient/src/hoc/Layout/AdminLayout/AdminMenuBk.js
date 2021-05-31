import React, { Component } from 'react'
import './AdminCss.css'
export default class AdminMenu extends Component {
    render() {
        return (
            <nav id="sidebar" className="adminMenu border">
                <div className="pl-4 pt-4">
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Cafe</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Library</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Users</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
// https://colorlib.com/etc/bootstrap-sidebar/sidebar-02/
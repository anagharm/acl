import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './AdminCss.css'
export default class AdminMenu extends Component {
    render() {
        return (
            <div className="adminMenu">
                <ProSidebar width="auto" image={false}>
                    <Menu iconShape="square">
                    <SubMenu title="Components" >
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
            
        )
    }
}
// https://colorlib.com/etc/bootstrap-sidebar/sidebar-02/
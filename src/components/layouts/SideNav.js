import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
class SideNav extends React.Component {
  
  getActivePathname() {
    return window.location.pathname;
  }
  getActiveParentMenu() {
    return [];
  }

  render() {
    return (
      <div>
        <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.2)", margin: "16px" }}></div>
        <Menu theme="dark" mode="inline"
          defaultSelectedKeys={[this.getActivePathname()]}
          defaultOpenKeys={this.getActiveParentMenu()}
          onSelect={this.props.closeSidebar}
          mode="inline" >

          <Menu.Item key="/" >
            <UserOutlined />
            <span>Dashboard</span>
            <Link to={'/'} />
          </Menu.Item>
          <Menu.Item key="/users">
            <UserOutlined />
            <span>Users</span>
            <Link to={'/users'} />
          </Menu.Item>

        </Menu>
      </div>
    );
  }
}
export default SideNav;
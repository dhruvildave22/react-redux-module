import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import UsersList from "./components/users/UsersList"
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import SideNav from "./components/layouts/SideNav";
import NewUser from "./components/users/NewUser";
const { Header, Sider, Content } = Layout;
class Routes extends React.Component {

  // componentDidMount() {
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     this.props.dispatch(fetchProfile());
  //   }
  // }

  render() {
    // const { profile } = this.props;

    return (
      <Router basename="/">
        <Layout>
          <Sider>
            <SideNav />
          </Sider>

          <Layout>
            <Header className="siteLayoutBackground" style={{ padding: 0, background: "#001529" }}>
              {/* {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: handleToggle,
                style: { color: "#fff" }
              })} */}
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
              <Switch>
                <Route exact path="/users" component={UsersList} />
                <Route exact path="/new-user" component={NewUser} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//   profile: state.profile.profile,
// });
// export default connect(mapStateToProps)(Routes);
export default Routes;
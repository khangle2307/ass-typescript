import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <NavLink to={"/"}>Trang chủ</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={"/admin/categories"}>Loại hàng</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={"/admin/products"}>Sản phẩm</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to={"/admin/users"}>Người dùng</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,backgroundColor : 'white'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
        <Breadcrumb.Item>Dasboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Outlet/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default AdminLayout
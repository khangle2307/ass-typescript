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
          <NavLink to={"categories"}>Loại hàng</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={"products"}>Sản phẩm</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to={"posts"}>Bài viết</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to={"users"}>Người dùng</NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to={"sliders"}>Slide ảnh</NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to={"order"}>Đơn hàng</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 ,backgroundColor : 'white'}}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Outlet/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default AdminLayout
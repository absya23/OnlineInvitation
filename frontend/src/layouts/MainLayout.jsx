import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
	const location = useLocation();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header>
				<div
					style={{
						float: "left",
						color: "#fff",
						fontWeight: "bold",
						marginRight: 24,
					}}
				>
					Wedding Invitation
				</div>
				<Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
					<Menu.Item key="/">
						<Link to="/">Trang chủ</Link>
					</Menu.Item>
					<Menu.Item key="/templates">
						<Link to="/templates">Mẫu thiệp</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: "24px 48px" }}>{children}</Content>
			<Footer style={{ textAlign: "center" }}>
				© {new Date().getFullYear()} Online Wedding Invitation
			</Footer>
		</Layout>
	);
};

export default MainLayout;

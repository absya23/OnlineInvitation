import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = [
	{
		label: <Link to="/">Trang chủ</Link>,
		key: "",
	},
	{
		label: <Link to="/templates">Mẫu thiệp</Link>,
		key: "/templates",
	},
	{
		label: <Link to="/contact">Liên hệ</Link>,
		key: "/contact",
	},
];

const MainLayout = ({ children }) => {
	const location = useLocation();
	const [current, setCurrent] = useState(location.pathname);
	const onClick = (e) => {
		setCurrent(e.key);
	};
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
				<Menu
					onClick={onClick}
					theme="dark"
					mode="horizontal"
					selectedKeys={[current]}
					items={items}
				></Menu>
			</Header>
			<Content style={{ padding: "24px 48px" }}>{children}</Content>
			<Footer style={{ textAlign: "center" }}>
				© {new Date().getFullYear()} Online Wedding Invitation
			</Footer>
		</Layout>
	);
};

export default MainLayout;

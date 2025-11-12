"use client";
import React from "react";
import "./globals.css";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import store from "@/store";
import { themeConfig } from "@/theme/config";
import Image from "next/image";

const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }) {
	const pathname = usePathname();

	return (
		<html lang="vi">
			<body>
				<Provider store={store}>
					<ConfigProvider theme={themeConfig}>
						<Layout style={{ minHeight: "100vh" }}>
							<Header
								style={{
									display: "flex",
									alignItems: "center",
									backgroundColor: "#fff",
								}}
							>
								<div
									style={{ color: "#fff", fontWeight: "bold", marginRight: 24 }}
								>
									<Image
										width={170}
										height={50}
										src="/logo.svg"
										alt="logo wedding invitation online"
									></Image>
								</div>
								<Menu
									style={{ flex: 1, backgroundColor: "#fff" }}
									mode="horizontal"
									selectedKeys={[pathname]}
									items={[
										{ key: "/", label: <Link href="/">Trang chủ</Link> },
										{
											key: "/templates",
											label: <Link href="/templates">Mẫu thiệp</Link>,
										},
									]}
								/>
							</Header>

							<Content style={{ padding: "24px 48px" }}>{children}</Content>

							<Footer style={{ textAlign: "center" }}>
								© {new Date().getFullYear()} Online Wedding Invitation
							</Footer>
						</Layout>
					</ConfigProvider>
				</Provider>
			</body>
		</html>
	);
}

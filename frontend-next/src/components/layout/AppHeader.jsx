"use client";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";

const { Header } = Layout;

const MenuItem = [
	{ key: "/", label: <Link href="/">Trang chủ</Link> },
	{
		key: "/templates",
		label: <Link href="/templates">Mẫu thiệp</Link>,
	},
	{
		key: "/contact",
		label: <Link href="/contact">Liên hệ</Link>,
	},
];

function AppHeader() {
	const pathname = usePathname();
	const [openMenuMobile, setOpenMenuMobile] = useState(false);
	const showDrawer = () => {
		setOpenMenuMobile(true);
	};
	const onClose = () => {
		setOpenMenuMobile(false);
	};

	return (
		<Fragment>
			<Header
				style={{
					display: "flex",
					alignItems: "center",
					backgroundColor: "#fff",
					padding: "0 20px",
					position: "sticky",
					top: 0,
					zIndex: 1000,
					boxShadow: "0 2px 8px #f0f1f2",
				}}
			>
				<div className="hidden sm:flex w-full desktop-header">
					<div
						className="flex justify-center items-center"
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
						items={MenuItem}
					/>
				</div>
				<div className="flex sm:hidden items-center gap-4 w-full mobile-header">
					<Button
						type="text"
						icon={<MenuOutlined style={{ fontSize: "20px" }} />}
						onClick={showDrawer}
						style={{ position: "absolute", left: 0 }}
					/>

					<div className="mobile-logo-container pl-5">
						<Image
							width={140}
							height={40}
							src="/logo.svg"
							alt="logo wedding invitation online"
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			</Header>
			<Drawer
				title="Menu"
				placement="left"
				closable={{ "aria-label": "Close Button", placement: "right" }}
				onClose={onClose}
				open={openMenuMobile}
				width={250}
			>
				<Menu
					mode="vertical"
					selectedKeys={[pathname]}
					items={MenuItem}
					onClick={onClose}
					style={{ borderRight: "none" }}
				/>
			</Drawer>
		</Fragment>
	);
}

export default AppHeader;

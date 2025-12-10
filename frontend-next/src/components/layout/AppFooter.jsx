"use client";
import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

function AppFooter() {
	return (
		<Footer style={{ textAlign: "center" }}>
			© {new Date().getFullYear()} Online Wedding Invitation
		</Footer>
	);
}

export default AppFooter;

"use client";
import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

function AppContent({ children }) {
	return <Content className="wrapper-container">{children}</Content>;
}

export default AppContent;

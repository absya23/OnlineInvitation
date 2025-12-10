import React from "react";
import "./globals.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Providers from "@/components/theme/Provider";
import AppHeader from "@/components/layout/AppHeader";
import AppContent from "@/components/layout/AppContent";
import AppFooter from "@/components/layout/AppFooter";

export default function RootLayout({ children }) {
	return (
		<html lang="vi">
			<body>
				<Providers>
					<Layout style={{ minHeight: "100vh" }}>
						<AppHeader />
						<AppContent>{children}</AppContent>
						<AppFooter />
					</Layout>
				</Providers>
			</body>
		</html>
	);
}

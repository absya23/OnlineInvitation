"use client";

import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "@/store";
import { themeConfig } from "@/theme/config";

export default function Providers({ children }) {
	return (
		<Provider store={store}>
			<ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
		</Provider>
	);
}

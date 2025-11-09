import React from "react";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout";
import "./app.css";

const App = () => {
	return (
		<MainLayout>
			<AppRoutes />
		</MainLayout>
	);
};

export default App;

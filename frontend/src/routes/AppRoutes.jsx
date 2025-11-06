import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TemplatesPage from "../pages/TemplatesPage";
import TemplateDetailPage from "../pages/TemplateDetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import InvitationViewPage from "../pages/InvitationViewPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/templates" element={<TemplatesPage />} />
			<Route path="/templates/:slug" element={<TemplateDetailPage />} />
			<Route path="/checkout/:slug" element={<CheckoutPage />} />
			<Route path="/invite/:slug" element={<InvitationViewPage />} />
		</Routes>
	);
};

export default AppRoutes;

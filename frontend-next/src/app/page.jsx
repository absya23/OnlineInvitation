import React from "react";
import { getTemplatesServer } from "@/lib/serverApi";
import HomeClientPage from "./HomeClientPage";

// time update
export const revalidate = 60;
export const dynamic = "auto";
export const metadata = {
	title: "Thiệp cưới online — Chọn mẫu & tạo thiệp nhanh",
	description:
		"Dịch vụ thiệp cưới online: chọn mẫu đẹp, điền thông tin, nhận link để mời bạn bè. Tạo thiệp nhanh, bắt mắt và dễ chia sẻ.",
	openGraph: {
		title: "Thiệp cưới online — Chọn mẫu & tạo thiệp nhanh",
		description:
			"Dịch vụ thiệp cưới online: chọn mẫu đẹp, điền thông tin, nhận link để mời bạn bè.",
		url: "https://your-domain.com",
	},
};

export default async function Home() {
	let templates = [];
	try {
		templates = await getTemplatesServer(6);
	} catch (e) {
		console.error("Error fetching templates for home:", e);
	}

	return <HomeClientPage templates={templates} />;
}

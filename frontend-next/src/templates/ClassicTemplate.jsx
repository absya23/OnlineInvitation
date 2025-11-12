import React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function ClassicTemplate({ data }) {
	const { bride_name, groom_name, event_datetime, venue, message } = data;
	return (
		<div
			style={{
				maxWidth: 700,
				margin: "0 auto",
				padding: 32,
				borderRadius: 16,
				background: "#fffaf5",
				textAlign: "center",
			}}
		>
			<Title level={3}>Thiệp cưới</Title>
			<Paragraph>Trân trọng kính mời</Paragraph>
			<Title level={2}>
				{bride_name} & {groom_name}
			</Title>
			<Paragraph>
				Thời gian: {new Date(event_datetime).toLocaleString("vi-VN")}
			</Paragraph>
			<Paragraph>Địa điểm: {venue}</Paragraph>
			{message && <Paragraph italic>{message}</Paragraph>}
		</div>
	);
}

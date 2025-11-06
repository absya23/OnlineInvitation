import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ClassicTemplate = ({ data }) => {
	const { bride_name, groom_name, event_datetime, venue, message } = data;

	return (
		<div
			style={{
				maxWidth: 600,
				margin: "0 auto",
				padding: 32,
				border: "1px solid #e0e0e0",
				borderRadius: 16,
				textAlign: "center",
				background: "#fffaf5",
			}}
		>
			<Title level={3} style={{ fontFamily: "serif" }}>
				Thiệp cưới
			</Title>
			<Paragraph>{`Trân trọng kính mời`}</Paragraph>
			<Title level={2} style={{ fontFamily: "serif" }}>
				{bride_name} & {groom_name}
			</Title>
			<Paragraph>
				Thời gian: {new Date(event_datetime).toLocaleString("vi-VN")}
			</Paragraph>
			<Paragraph>Địa điểm: {venue}</Paragraph>
			{message && <Paragraph italic>{message}</Paragraph>}
		</div>
	);
};

export default ClassicTemplate;

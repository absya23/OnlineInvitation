import React from "react";

const MinimalTemplate = ({ data }) => {
	const { bride_name, groom_name, event_datetime, venue } = data;

	return (
		<div
			style={{
				minHeight: "100vh",
				background: "#f0f2f5",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 24,
			}}
		>
			<div
				style={{
					background: "#ffffff",
					padding: 40,
					borderRadius: 24,
					textAlign: "center",
					minWidth: 400,
				}}
			>
				<h2
					style={{
						letterSpacing: 4,
						textTransform: "uppercase",
						fontSize: 14,
					}}
				>
					Wedding Invitation
				</h2>
				<h1 style={{ marginTop: 16, marginBottom: 16 }}>
					{bride_name} & {groom_name}
				</h1>
				<p>{new Date(event_datetime).toLocaleString("vi-VN")}</p>
				<p>{venue}</p>
			</div>
		</div>
	);
};

export default MinimalTemplate;

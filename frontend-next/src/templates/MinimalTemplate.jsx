export default function MinimalTemplate({ data }) {
	const { bride_name, groom_name, event_datetime, venue } = data;
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 24,
			}}
		>
			<div
				style={{
					background: "#fff",
					padding: 40,
					borderRadius: 24,
					textAlign: "center",
					minWidth: 380,
				}}
			>
				<h1>
					{bride_name} & {groom_name}
				</h1>
				<p>{new Date(event_datetime).toLocaleString("vi-VN")}</p>
				<p>{venue}</p>
			</div>
		</div>
	);
}

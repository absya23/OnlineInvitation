import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const TemplateCard = ({ template }) => {
	return (
		<Card
			hoverable
			cover={
				<img
					alt={template.name}
					src={template.thumbnail_url}
					style={{ objectFit: "cover", height: 220 }}
				/>
			}
		>
			<Card.Meta
				title={template.name}
				description={template.description}
				style={{ marginBottom: 12 }}
			/>
			<div style={{ display: "flex", gap: 8 }}>
				<Link to={`/templates/${template.slug}`}>
					<Button type="default">Xem chi tiết</Button>
				</Link>
				<Link to={`/checkout/${template.slug}`}>
					<Button type="primary">Dùng mẫu này</Button>
				</Link>
			</div>
		</Card>
	);
};

export default TemplateCard;

"use client";
import React from "react";
import { Card, Button } from "antd";
import Link from "next/link";
import Image from "next/image";

const TemplateCard = ({ template }) => {
	return (
		<Card
			hoverable
			cover={
				<Image
					width={500}
					height={500}
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
				<Link href={`/templates/${template.slug}`}>
					<Button> Xem chi tiết </Button>
				</Link>
				<Link href={`/checkout/${template.slug}`}>
					<Button type="primary"> Dùng mẫu này </Button>
				</Link>
			</div>
		</Card>
	);
};

export default TemplateCard;

"use client";
import React from "react";
import Link from "next/link";
import { Row, Col, Button, Typography, Card } from "antd";
import Image from "next/image";
import TemplateCard from "@/components/TemplateCard";

export default function HomeClientPage({ templates }) {
	return (
		<main>
			<section style={{ marginBottom: 40 }}>
				<Row gutter={32} align="middle">
					<Col xs={24} md={12}>
						<Typography.Title>
							Thiệp cưới online – hiện đại & tiện lợi
						</Typography.Title>
						<Typography.Paragraph>
							Dịch vụ thiệp cưới online giúp bạn tạo thiệp cưới đẹp, hiện đại,
							dễ chia sẻ qua link hoặc mạng xã hội. Chọn mẫu – nhập thông tin –
							nhận link thiệp, tất cả chỉ trong vài phút.
						</Typography.Paragraph>
						<Link href="/templates">
							<Button type="primary" size="large">
								Xem các mẫu
							</Button>
						</Link>
					</Col>

					<Col xs={24} md={12}>
						<Card style={{ borderRadius: 12 }}>
							<Image
								src="/weddingInvitationBanner.png"
								alt="Wedding Invitation"
								width={500}
								height={300}
								style={{ width: "100%", height: "auto", borderRadius: 12 }}
							/>
						</Card>
					</Col>
				</Row>
			</section>

			<section>
				<Typography.Title level={3}>Một vài mẫu nổi bật</Typography.Title>
				<Row gutter={[24, 24]}>
					{templates.length === 0 ? (
						<Col span={24}>
							<Typography.Paragraph>
								Không có mẫu để hiển thị.
							</Typography.Paragraph>
						</Col>
					) : (
						templates.map((tpl) => (
							<Col key={tpl.id} xs={24} sm={12} md={8} lg={6}>
								<TemplateCard template={tpl} />
							</Col>
						))
					)}
				</Row>
			</section>
		</main>
	);
}

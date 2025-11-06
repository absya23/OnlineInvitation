import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import TemplatePreviewIframe from "../components/TemplatePreviewIframe";
import withTemplateData from "../hoc/withTemplateData";

const { Title, Paragraph } = Typography;

const TemplateDetailPage = ({ template }) => {
	return (
		<div>
			<Row gutter={32}>
				<Col span={14}>
					<TemplatePreviewIframe previewUrl={template.preview_url} />
				</Col>
				<Col span={10}>
					<Title level={2}>{template.name}</Title>
					<Paragraph>{template.description}</Paragraph>
					<Paragraph>
						Mã template: <strong>{template.slug}</strong>
					</Paragraph>
					<div style={{ display: "flex", gap: 8 }}>
						<Link to={`/checkout/${template.slug}`}>
							<Button type="primary">Dùng mẫu này</Button>
						</Link>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default withTemplateData(TemplateDetailPage);

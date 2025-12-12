"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { Row, Col, Typography, Button, Spin, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import TemplatePreviewIframe from "@/components/TemplatePreviewIframe";
import {
	fetchTemplateFailure,
	fetchTemplateStart,
	fetchTemplateSuccess,
} from "@/store/templatesSlice";
import axiosClient from "@/lib/axios";

export default function TemplateDetail() {
	const params = useParams();
	const slug = params?.slug;
	const dispatch = useDispatch();
	const { current, loading, error } = useSelector((s) => s.templates);

	useEffect(() => {
		const fetch = async () => {
			try {
				dispatch(fetchTemplateStart());
				const res = await axiosClient.get(`/templates/${slug}`);
				dispatch(fetchTemplateSuccess(res.data.data));
			} catch (e) {
				dispatch(fetchTemplateFailure(e.message || "Error"));
			}
		};
		if (slug) fetch();
	}, [slug, dispatch]);

	if (loading || !current)
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
				<Spin />
			</div>
		);
	if (error)
		return (
			<Alert type="error" message="Lỗi tải template" description={error} />
		);

	return (
		<Row gutter={32}>
			<Col span={14}>
				<TemplatePreviewIframe previewUrl={current.preview_url} />
			</Col>
			<Col span={10}>
				<Typography.Title level={2}>{current.name}</Typography.Title>
				<Typography.Paragraph>{current.description}</Typography.Paragraph>
				<div style={{ display: "flex", gap: 8 }}>
					<Link href={`/checkout/${current.slug}`} legacyBehavior>
						<Button type="primary">Dùng mẫu này</Button>
					</Link>
				</div>
			</Col>
		</Row>
	);
}

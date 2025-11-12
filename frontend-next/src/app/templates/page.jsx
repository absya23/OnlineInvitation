"use client";
import React, { useEffect } from "react";
import { Row, Col, Spin, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";

import TemplateCard from "@/components/TemplateCard";
import axiosClient from "@/lib/axios";
import {
	fetchTemplatesFailure,
	fetchTemplatesStart,
	fetchTemplatesSuccess,
} from "@/store/templatesSlice";

export default function TemplatesPage() {
	const dispatch = useDispatch();
	const { list, loading, error } = useSelector((s) => s.templates);

	useEffect(() => {
		const fetchTemplates = async () => {
			try {
				dispatch(fetchTemplatesStart());
				const res = await axiosClient.get("/templates");
				dispatch(fetchTemplatesSuccess(res.data.data));
			} catch (e) {
				dispatch(fetchTemplatesFailure(e.message || "Error"));
			}
		};
		fetchTemplates();
	}, [dispatch]);

	if (loading)
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
				<Spin />
			</div>
		);
	if (error)
		return <Alert type="error" message="Lỗi tải mẫu" description={error} />;

	return (
		<div>
			<h1>Danh sách mẫu thiệp cưới</h1>
			<Row gutter={[24, 24]}>
				{list.map((t) => (
					<Col key={t.id} xs={24} sm={12} md={8} lg={6}>
						<TemplateCard template={t} />
					</Col>
				))}
			</Row>
		</div>
	);
}

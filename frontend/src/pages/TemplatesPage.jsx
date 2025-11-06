import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../api/axiosClient";
import {
	fetchTemplatesStart,
	fetchTemplatesSuccess,
	fetchTemplatesFailure,
} from "../store/templatesSlice";
import { Row, Col, Spin, Alert } from "antd";
import TemplateCard from "../components/TemplateCard";

const TemplatesPage = () => {
	const dispatch = useDispatch();
	const { list, loading, error } = useSelector((state) => state.templates);

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

	if (loading) {
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
				<Spin />
			</div>
		);
	}

	if (error) {
		return (
			<Alert type="error" message="Lỗi tải mẫu thiệp" description={error} />
		);
	}

	return (
		<div>
			<h1>Danh sách mẫu thiệp cưới</h1>
			<Row gutter={[24, 24]}>
				{list.map((tpl) => (
					<Col key={tpl.id} xs={24} sm={12} md={8} lg={6}>
						<TemplateCard template={tpl} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default TemplatesPage;

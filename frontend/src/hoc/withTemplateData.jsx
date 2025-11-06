import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../api/axiosClient";
import {
	fetchTemplateStart,
	fetchTemplateSuccess,
	fetchTemplateFailure,
} from "../store/templatesSlice";
import { Spin } from "antd";

const withTemplateData = (WrappedComponent) => {
	const WithTemplateDataComponent = (props) => {
		const { slug } = useParams();
		const dispatch = useDispatch();
		const { current, loading } = useSelector((state) => state.templates);

		useEffect(() => {
			const fetchTemplate = async () => {
				try {
					dispatch(fetchTemplateStart());
					const res = await axiosClient.get(`/templates/${slug}`);
					dispatch(fetchTemplateSuccess(res.data.data));
				} catch (err) {
					dispatch(fetchTemplateFailure(err.message || "Error"));
				}
			};
			fetchTemplate();
		}, [slug, dispatch]);

		if (loading || !current) {
			return (
				<div style={{ textAlign: "center", marginTop: 50 }}>
					<Spin />
				</div>
			);
		}

		return <WrappedComponent template={current} {...props} />;
	};

	return WithTemplateDataComponent;
};

export default withTemplateData;

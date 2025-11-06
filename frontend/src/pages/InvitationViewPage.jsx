import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../api/axiosClient";
import {
	fetchInvitationStart,
	fetchInvitationSuccess,
	fetchInvitationFailure,
} from "../store/invitationsSlice";
import templateMap from "../templates/templateMap";
import { Spin, Alert } from "antd";

const InvitationViewPage = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const { current, loading, error } = useSelector((state) => state.invitations);

	useEffect(() => {
		const fetchInvitation = async () => {
			try {
				dispatch(fetchInvitationStart());
				const res = await axiosClient.get(`/invitations/${slug}`);
				dispatch(fetchInvitationSuccess(res.data.data));
			} catch (e) {
				dispatch(fetchInvitationFailure(e.message || "Error"));
			}
		};
		fetchInvitation();
	}, [slug, dispatch]);

	if (loading || !current) {
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
				<Spin />
			</div>
		);
	}

	if (error) {
		return <Alert type="error" message="Lỗi tải thiệp" description={error} />;
	}

	const TemplateComponent =
		templateMap[current.template.slug] || templateMap["classic-elegant"];

	return <TemplateComponent data={current} />;
};

export default InvitationViewPage;

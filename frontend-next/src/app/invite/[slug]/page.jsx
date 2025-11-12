"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import axiosClient from "../../../src/lib/axios";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchInvitationStart,
	fetchInvitationSuccess,
	fetchInvitationFailure,
} from "../../../src/store/invitationsSlice";
import { Spin, Alert } from "antd";
import templateMap from "../../../src/components/templates/templateMap";

export default function InviteView() {
	const params = useParams();
	const slug = params?.slug;
	const dispatch = useDispatch();
	const { current, loading, error } = useSelector((s) => s.invitations);

	useEffect(() => {
		const fetch = async () => {
			try {
				dispatch(fetchInvitationStart());
				const res = await axiosClient.get(`/invitations/${slug}`);
				dispatch(fetchInvitationSuccess(res.data.data));
			} catch (e) {
				dispatch(fetchInvitationFailure(e.message || "Error"));
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
		return <Alert type="error" message="Lỗi tải thiệp" description={error} />;

	// invitation trả về có relation template
	const tplSlug = current.template?.slug || "classic-elegant";
	const TemplateComponent =
		templateMap[tplSlug] || templateMap["classic-elegant"];
	return <TemplateComponent data={current} />;
}

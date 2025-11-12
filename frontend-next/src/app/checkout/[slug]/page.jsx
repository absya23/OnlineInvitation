page.jsx;
("use client");
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../../src/lib/axios";
import {
	fetchTemplateStart,
	fetchTemplateSuccess,
	fetchTemplateFailure,
} from "../../../src/store/templatesSlice";
import {
	createInvitationStart,
	createInvitationSuccess,
	createInvitationFailure,
} from "../../../src/store/invitationsSlice";
import InvitationForm from "../../../src/components/InvitationForm";
import { Typography, message, Spin, Alert } from "antd";

export default function CheckoutPage() {
	const params = useParams();
	const slug = params?.slug;
	const dispatch = useDispatch();
	const router = useRouter();
	const {
		current: template,
		loading: tplLoading,
		error: tplError,
	} = useSelector((s) => s.templates);
	const { loading: invLoading } = useSelector((s) => s.invitations);

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

	const handleSubmit = async (formData) => {
		try {
			dispatch(createInvitationStart());
			const payload = { template_id: template.id, ...formData };
			const res = await axiosClient.post("/invitations", payload);
			dispatch(createInvitationSuccess(res.data.data));
			message.success("Tạo thiệp thành công!");
			router.push(`/invite/${res.data.data.slug}`);
		} catch (e) {
			dispatch(createInvitationFailure(e.message || "Error"));
			message.error("Tạo thiệp thất bại");
		}
	};

	if (tplLoading || !template)
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
				<Spin />
			</div>
		);
	if (tplError)
		return <Alert type="error" message="Lỗi tải mẫu" description={tplError} />;

	return (
		<div>
			<Typography.Title level={2}>
				Điền thông tin thiệp — {template.name}
			</Typography.Title>
			<InvitationForm onSubmit={handleSubmit} loading={invLoading} />
		</div>
	);
}

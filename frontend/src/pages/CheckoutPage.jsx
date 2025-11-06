import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import InvitationForm from "../components/InvitationForm";
import withTemplateData from "../hoc/withTemplateData";
import {
	createInvitationStart,
	createInvitationSuccess,
	createInvitationFailure,
} from "../store/invitationsSlice";
import { Typography, message } from "antd";

const { Title } = Typography;

const CheckoutPage = ({ template }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.invitations);

	const handleSubmit = async (formData) => {
		try {
			dispatch(createInvitationStart());
			const payload = {
				template_id: template.id,
				...formData,
			};
			const res = await axiosClient.post("/invitations", payload);
			const invitation = res.data.data;
			dispatch(createInvitationSuccess(invitation));

			message.success("Tạo thiệp thành công!");
			navigate(`/invite/${invitation.slug}`);
		} catch (e) {
			dispatch(createInvitationFailure(e.message || "Error"));
			message.error("Có lỗi xảy ra khi tạo thiệp");
		}
	};

	return (
		<div>
			<Title level={2}>Điền thông tin thiệp – {template.name}</Title>
			<InvitationForm onSubmit={handleSubmit} loading={loading} />
		</div>
	);
};

export default withTemplateData(CheckoutPage);

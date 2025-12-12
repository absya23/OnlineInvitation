"use client";

import contactApi from "@/lib/contactApi";
import { vietnamesePhoneRegex } from "@/util/helper";
import {
	Button,
	Form,
	Input,
	notification,
	Radio,
	Space,
	Typography,
} from "antd";
import React, { Fragment, useState } from "react";

const { Title, Paragraph } = Typography;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function FormContact() {
	const [form] = Form.useForm();
	const [api, contextHolder] = notification.useNotification();
	const [loading, setLoading] = useState(false);
	const notify = (type, message, description, placement = "bottom") => {
		api[type]({
			message,
			description,
			placement,
		});
	};
	const onFinish = async (values) => {
		setLoading(true);
		let dataContact = {
			name: values.name,
			phone: values.phone,
			email: values.email ?? "",
			note: values.note ?? "",
			gender: values.gender,
		};
		if (values.gender === "other") {
			dataContact.gender = values.gender + "/" + values.customizeGender;
		}
		try {
			await contactApi.create(dataContact);
			notify("success", "Gửi thành công", "Cảm ơn bạn đã liên hệ!");
			form.resetFields();
		} catch (error) {
			notify("error", "Lỗi", "Vui lòng thử lại sau.");
		} finally {
			setLoading(false);
		}
	};
	const onReset = () => {
		form.resetFields();
	};
	return (
		<Fragment>
			{contextHolder}
			<div className="text-center">
				<Title level={2}>Liên hệ với chúng tôi</Title>
				<Paragraph className="mb-5 text-center italic">
					Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm
					nhất.
				</Paragraph>
			</div>
			<Form
				{...layout}
				form={form}
				name="control-hooks"
				onFinish={onFinish}
				style={{ maxWidth: 600 }}
				wrapperCol={{ flex: 1 }}
				initialValues={{ gender: "male" }}
			>
				<Form.Item
					name="name"
					label="Họ tên"
					rules={[
						{ required: true, message: "Vui lòng nhập tên" },
						{ whitespace: true, message: "Không được để trống" },
					]}
				>
					<Input placeholder="Tên của bạn" />
				</Form.Item>
				<Form.Item
					name="phone"
					label="Số điện thoại"
					rules={[
						{ required: true, message: "Vui lòng nhập số điện thoại" },
						{
							pattern: vietnamesePhoneRegex,
							message: "Nhập số điện thoại đúng định dạng",
						},
					]}
				>
					<Input placeholder="Nhập số điện thoại" />
				</Form.Item>
				<Form.Item
					name="email"
					label="Email"
					rules={[{ type: "email", message: "Vui lòng nhập email hợp lệ" }]}
				>
					<Input placeholder="test@gmail.com" />
				</Form.Item>
				<Form.Item
					name="gender"
					label="Giới tính"
					rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
				>
					<Radio.Group
						options={[
							{ label: "Male", value: "male" },
							{ label: "Female", value: "female" },
							{ label: "Other", value: "other" },
						]}
					/>
				</Form.Item>
				<Form.Item
					noStyle
					shouldUpdate={(prevValues, currentValues) =>
						prevValues.gender !== currentValues.gender
					}
				>
					{({ getFieldValue }) =>
						getFieldValue("gender") === "other" ? (
							<Form.Item
								name="customizeGender"
								label="Tùy chỉnh giới tính"
								rules={[{ required: true, message: "Vui lòng điền giới tính" }]}
							>
								<Input />
							</Form.Item>
						) : null
					}
				</Form.Item>
				<Form.Item name="note" label="Ghi chú">
					<Input.TextArea placeholder="Để lại ghi chú..." />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Space>
						<Button type="primary" htmlType="submit" loading={loading}>
							Gửi
						</Button>
						<Button htmlType="button" onClick={onReset} disabled={loading}>
							Đặt lại
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Fragment>
	);
}

export default FormContact;

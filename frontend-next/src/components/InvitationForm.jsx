"use client";
import React from "react";
import { Form, Input, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function InvitationForm({ onSubmit, loading }) {
	const [form] = Form.useForm();

	const handleFinish = (values) => {
		const imageFiles = values.images?.fileList || [];
		const images = imageFiles.map((f) => ({ name: f.name })); // handle upload by be -> return url
		onSubmit({
			bride_name: values.bride_name,
			groom_name: values.groom_name,
			event_datetime: values.event_datetime?.toISOString(),
			venue: values.venue,
			message: values.message,
			images,
		});
	};

	return (
		<Form
			layout="vertical"
			form={form}
			onFinish={handleFinish}
			style={{ maxWidth: 700 }}
		>
			<Form.Item
				name="bride_name"
				label="Tên cô dâu"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="groom_name"
				label="Tên chú rể"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="event_datetime"
				label="Thời gian"
				rules={[{ required: true }]}
			>
				<DatePicker showTime style={{ width: "100%" }} />
			</Form.Item>
			<Form.Item name="venue" label="Địa điểm" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name="message" label="Lời nhắn">
				<TextArea rows={4} />
			</Form.Item>
			<Form.Item name="images" label="Ảnh cưới" valuePropName="fileList">
				<Upload multiple beforeUpload={() => false} listType="picture">
					<Button icon={<UploadOutlined />}>Chọn ảnh</Button>
				</Upload>
			</Form.Item>
			<Form.Item>
				<Button type="primary" loading={loading} htmlType="submit">
					Tạo thiệp
				</Button>
			</Form.Item>
		</Form>
	);
}

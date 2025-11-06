import React from "react";
import { Form, Input, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const InvitationForm = ({ onSubmit, loading }) => {
	const [form] = Form.useForm();

	const handleFinish = (values) => {
		// convert file list -> chỉ lấy name hoặc base64 hoặc url (tùy strategy)
		const imageFiles = values.images?.fileList || [];
		const images = imageFiles.map((file) => ({
			name: file.name,
			// ở thực tế: có thể upload lên server trước, lấy url
			// tạm thời demo: lưu name
		}));

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
			style={{ maxWidth: 600 }}
		>
			<Form.Item
				label="Tên cô dâu"
				name="bride_name"
				rules={[{ required: true, message: "Vui lòng nhập tên cô dâu" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Tên chú rể"
				name="groom_name"
				rules={[{ required: true, message: "Vui lòng nhập tên chú rể" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Thời gian tổ chức"
				name="event_datetime"
				rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
			>
				<DatePicker showTime style={{ width: "100%" }} />
			</Form.Item>

			<Form.Item
				label="Địa điểm"
				name="venue"
				rules={[{ required: true, message: "Vui lòng nhập địa điểm" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item label="Lời nhắn trên thiệp" name="message">
				<TextArea rows={4} />
			</Form.Item>

			<Form.Item label="Ảnh cưới" name="images" valuePropName="fileList">
				<Upload multiple beforeUpload={() => false} listType="picture">
					<Button icon={<UploadOutlined />}>Chọn hình</Button>
				</Upload>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" loading={loading}>
					Tạo thiệp
				</Button>
			</Form.Item>
		</Form>
	);
};

export default InvitationForm;

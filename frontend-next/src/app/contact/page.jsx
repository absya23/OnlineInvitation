"use client";

import { Button, Form, Input, Select, Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function ContactPage() {
	const [form] = Form.useForm();
	const onGenderChange = (value) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: "Hi, man!" });
				break;
			case "female":
				form.setFieldsValue({ note: "Hi, lady!" });
				break;
			case "other":
				form.setFieldsValue({ note: "Hi there!" });
				break;
			default:
		}
	};
	const onFinish = (values) => {
		console.log(values);
	};
	const onReset = () => {
		form.resetFields();
	};
	const onFill = () => {
		form.setFieldsValue({ note: "Hello world!", gender: "male" });
	};
	return (
		<div>
			<div
				className="w-3xl mx-auto my-10 shadow-lg"
				style={{
					background: "#fff",
					minHeight: 280,
					padding: 24,
					borderRadius: 20,
				}}
			>
				<div className="text-center">
					<Title level="2">Liên hệ với chúng tôi</Title>
					<Paragraph className="mb-5 text-center italic">
						Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian
						sớm nhất.
					</Paragraph>
				</div>
				<Form
					{...layout}
					form={form}
					name="control-hooks"
					onFinish={onFinish}
					style={{ maxWidth: 600 }}
					wrapperCol={{ flex: 1 }}
				>
					<Form.Item name="note" label="Note" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
						<Select
							allowClear
							placeholder="Select a option and change input text above"
							onChange={onGenderChange}
							options={[
								{ label: "male", value: "male" },
								{ label: "female", value: "female" },
								{ label: "other", value: "other" },
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
									label="Customize Gender"
									rules={[{ required: true }]}
								>
									<Input />
								</Form.Item>
							) : null
						}
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Space>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
							<Button htmlType="button" onClick={onReset}>
								Reset
							</Button>
							<Button type="link" htmlType="button" onClick={onFill}>
								Fill form
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default ContactPage;

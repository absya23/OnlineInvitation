"use client";

import { Button, Form, Input, Radio, Space, Typography } from "antd";
import React, { Fragment } from "react";

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
	return (
		<Fragment>
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
					label="Name"
					rules={[
						{ required: true, message: "Vui lòng nhập tên" },
						{ whitespace: true, message: "Không được để trống" },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
					<Radio.Group
						placeholder="Select a option and change input text above"
						onChange={onGenderChange}
						options={[
							{ label: "male", value: "Male" },
							{ label: "female", value: "Female" },
							{ label: "other", value: "Other" },
						]}
					/>
				</Form.Item>
				<Form.Item name="note" label="Note" rules={[{ required: true }]}>
					<Input />
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
					</Space>
				</Form.Item>
			</Form>
		</Fragment>
	);
}

export default FormContact;

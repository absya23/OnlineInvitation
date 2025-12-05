import { Button, Form, Input } from "antd";

const ContactPage = () => {
	return (
		<div
			className="shadow-lg"
			style={{
				background: "#fff",
				minHeight: 280,
				padding: 24,
				borderRadius: 20,
			}}
		>
			<h1 style={{ textAlign: "center" }}>Liên hệ với chúng tôi</h1>
			<p style={{ textAlign: "center", fontStyle: "italic" }}>
				Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm
				nhất.
			</p>
			<p>
				<p></p>
			</p>
			<Form
				className="m-auto"
				name="wrap"
				labelCol={{ flex: "110px" }}
				labelAlign="left"
				labelWrap
				wrapperCol={{ flex: 1 }}
				colon={false}
				style={{ maxWidth: 600 }}
			>
				<Form.Item label="Normal label" name="zz" rules={[{ required: true }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label="A super long label text"
					name="password"
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>

				<Form.Item label="A super long label text" name="password1">
					<Input />
				</Form.Item>

				<Form.Item label=" ">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default ContactPage;

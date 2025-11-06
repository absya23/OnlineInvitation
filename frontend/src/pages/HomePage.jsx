import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HomePage = () => {
	return (
		<Row gutter={32} align="middle">
			<Col span={12}>
				<Title>Thiệp cưới online – hiện đại & tiện lợi</Title>
				<Paragraph>
					Dịch vụ thiệp cưới online giúp bạn tạo thiệp cưới đẹp, hiện đại, dễ
					chia sẻ qua link hoặc mạng xã hội. Chọn mẫu – nhập thông tin – nhận
					link thiệp, tất cả chỉ trong vài phút.
				</Paragraph>
				<Link to="/templates">
					<Button type="primary" size="large">
						Xem các mẫu thiệp
					</Button>
				</Link>
			</Col>
			<Col span={12}>
				<img
					src="https://via.placeholder.com/500x300?text=Wedding+Invitation"
					alt="Wedding"
					style={{ width: "100%", borderRadius: 16 }}
				/>
			</Col>
		</Row>
	);
};

export default HomePage;

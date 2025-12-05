"use client";
import faq from "@/data/faq";
import { Collapse, theme, Typography } from "antd";
import React, { Fragment } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";

const { Title } = Typography;

const useStyles = createStyles(({ token }) => ({
	header: {
		color: token.colorPrimary,
		fontWeight: "bold",
		fontSize: "16px",
	},
}));
const getItems = (panelStyle, classNames) => {
	return faq.map((it, index) => ({
		key: index + 1,
		label: <p className={`mb-0! ${classNames.header}`}>{it.question}</p>,
		children: <p>{it.answer}</p>,
		style: panelStyle,
	}));
};

function QuestionAnswer() {
	const { token } = theme.useToken();
	const panelStyle = {
		marginBottom: 24,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: "none",
	};
	const { styles: classNames } = useStyles();
	return (
		<Fragment>
			<div className="text-center">
				<Title level={2}>Câu hỏi thường gặp</Title>
			</div>
			<Collapse
				bordered={false}
				defaultActiveKey={["1"]}
				expandIcon={({ isActive }) => (
					<CaretRightOutlined rotate={isActive ? 90 : 0} />
				)}
				items={getItems(panelStyle, classNames)}
			/>
		</Fragment>
	);
}

export default QuestionAnswer;

"use client";
import React from "react";

const TemplatePreviewIframe = ({ previewUrl }) => {
	if (!previewUrl) return null;
	return (
		<iframe
			title="Template Preview"
			src={previewUrl}
			style={{
				width: "100%",
				height: 480,
				border: "1px solid #ddd",
				borderRadius: 8,
			}}
		/>
	);
};

export default TemplatePreviewIframe;

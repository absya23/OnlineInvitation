import FormContact from "@/components/FormContact";
import QuestionAnswer from "@/components/QuestionAnswer";
import React, { Fragment } from "react";

function ContactPage() {
	return (
		<Fragment>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div>
					<div>
						<QuestionAnswer />
					</div>
				</div>

				<div>
					<div
						className="shadow-lg"
						style={{
							background: "#fff",
							minHeight: 280,
							padding: 24,
							borderRadius: 10,
						}}
					>
						<FormContact />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default ContactPage;

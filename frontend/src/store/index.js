import { configureStore } from "@reduxjs/toolkit";
import templatesReducer from "./templatesSlice";
import invitationsReducer from "./invitationsSlice";

const store = configureStore({
	reducer: {
		templates: templatesReducer,
		invitations: invitationsReducer,
	},
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const templatesSlice = createSlice({
	name: "templates",
	initialState: {
		list: [],
		current: null,
		loading: false,
		error: null,
	},
	reducers: {
		fetchTemplatesStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchTemplatesSuccess(state, action) {
			state.loading = false;
			state.list = action.payload;
		},
		fetchTemplatesFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},

		fetchTemplateStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchTemplateSuccess(state, action) {
			state.loading = false;
			state.current = action.payload;
		},
		fetchTemplateFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchTemplatesStart,
	fetchTemplatesSuccess,
	fetchTemplatesFailure,
	fetchTemplateStart,
	fetchTemplateSuccess,
	fetchTemplateFailure,
} = templatesSlice.actions;

export default templatesSlice.reducer;

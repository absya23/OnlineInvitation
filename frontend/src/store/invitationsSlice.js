import { createSlice } from "@reduxjs/toolkit";

const invitationsSlice = createSlice({
	name: "invitations",
	initialState: {
		current: null,
		loading: false,
		error: null,
	},
	reducers: {
		createInvitationStart(state) {
			state.loading = true;
			state.error = null;
		},
		createInvitationSuccess(state, action) {
			state.loading = false;
			state.current = action.payload;
		},
		createInvitationFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},

		fetchInvitationStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchInvitationSuccess(state, action) {
			state.loading = false;
			state.current = action.payload;
		},
		fetchInvitationFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	createInvitationStart,
	createInvitationSuccess,
	createInvitationFailure,
	fetchInvitationStart,
	fetchInvitationSuccess,
	fetchInvitationFailure,
} = invitationsSlice.actions;

export default invitationsSlice.reducer;

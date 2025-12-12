const { default: axiosClient } = require("./axios");

const contactApi = {
	getAll: () => axiosClient.get("/contacts"),
	getById: (id) => axiosClient.get(`/contacts/${id}`),
	create: (data) => axiosClient.post("/contacts", data),
	update: (data, id) => axiosClient.put(`/contacts/${id}`, data),
	delete: (id) => axiosClient.delete(`/contacts/${id}`),
};

export default contactApi;

import axios from "axios";

const baseURL =
	process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

const axiosClient = axios.create({
	baseURL,
	headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	(res) => res,
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosClient;

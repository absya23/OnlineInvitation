import axios from "axios";

const baseURL =
	process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

const axiosClient = axios.create({
	baseURL,
	headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosClient.interceptors.response.use(
	(res) => res,
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosClient;

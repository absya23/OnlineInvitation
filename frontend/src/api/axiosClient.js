import axios from "axios";

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// interceptor (optional)
axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		// có thể handle 401, 422, ...
		return Promise.reject(error);
	}
);

export default axiosClient;

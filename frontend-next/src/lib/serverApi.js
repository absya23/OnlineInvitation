// Helper đơn giản dùng fetch() phía server để gọi Laravel API.
// Tránh dùng axios client side ở Server Component, dùng fetch để tận dụng streaming/SSR.
const API_BASE =
	process.env.API_BASE_URL ||
	process.env.NEXT_PUBLIC_API_BASE_URL ||
	"http://localhost:8000/api";

export async function getTemplatesServer(limit = 6) {
	const url = `${API_BASE.replace(/\/$/, "")}/templates`; // ensure no double slash
	// Bạn có thể set cache: 'force-cache' or revalidate seconds -> choose phù hợp
	// revalidate: 60 sẽ cache 60s (Incremental Static Regeneration)
	const res = await fetch(url, { next: { revalidate: 60 } });
	if (!res.ok) {
		throw new Error(`Failed to fetch templates: ${res.status}`);
	}
	const data = await res.json();
	// assuming API returns { data: [...] }
	return Array.isArray(data?.data) ? data.data.slice(0, limit) : [];
}

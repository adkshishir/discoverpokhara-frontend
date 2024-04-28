import { CATEGORIES } from '$lib/const/api.js';
export const load = async ({ params, fetch, url }) => {
	const res = await fetch(`${CATEGORIES}${url.pathname}`);
	let data = await res.json();
	return data?.data;
};

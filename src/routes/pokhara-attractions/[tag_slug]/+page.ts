import { TAGS } from '$lib/const/api.js';

export const load = async ({ params, fetch, url }) => {
	const res = await fetch(`${TAGS}/${params.tag_slug}`);
	let data = await res.json();
	return data?.data;
};

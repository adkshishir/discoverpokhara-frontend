import { POSTS } from '$lib/const/api';

export async function load({ params, fetch }: any) {
	const res = await fetch(`${POSTS}/${params.post_slug}`);
	if (!res.ok) {
		return {
			status: res.status,
			error: res.statusText
		};
	}
	const data = await res.json();
	return data?.data;
}

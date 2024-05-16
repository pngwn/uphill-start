export const load = async ({ fetch, params }) => {
	const res = await fetch(`/api/sql/${params.id}`);

	if (res.ok) {
		return {
			recipe: await res.json()
		};
	}
};

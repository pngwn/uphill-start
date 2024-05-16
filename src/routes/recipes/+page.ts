export const load = async ({ fetch }) => {
	let res;
	try {
		res = await fetch('/api/sql/get');
		console.log(res);
	} catch (e) {
		return {
			recipes: []
		};
	}

	if (res.ok) {
		return {
			recipes: await res.json()
		};
	} else {
		return {
			recipes: []
		};
	}
};

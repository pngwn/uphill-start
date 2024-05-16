import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';

const get_all_recipes = `SELECT * FROM recipes`;

export const GET: RequestHandler = async ({ params, platform, setHeaders, request }) => {
	const recipes = db.prepare(get_all_recipes).all();

	return json(recipes);
};

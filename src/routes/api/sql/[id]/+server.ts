import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';

export const GET: RequestHandler = async ({ params, platform, setHeaders, request }) => {
	const id = params.id;

	const row = db.prepare('SELECT * FROM recipes WHERE id = ?').get(id);

	return json(row);
};

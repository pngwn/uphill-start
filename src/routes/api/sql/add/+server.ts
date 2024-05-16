import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';

const create_table = `
CREATE TABLE IF NOT EXISTS recipes (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	instructions TEXT,
	ingredients TEXT,
	description TEXT,
	servings INTEGER,
	notes TEXT,
	nutrition TEXT
)`;

const make_random_id = () => Math.floor(Math.random() * 1000000);

export const POST: RequestHandler = async ({ params, platform, setHeaders, request }) => {
	const id = make_random_id();
	const body = (await request.json()) as Record<string, any>;

	db.exec(create_table);

	const { name, instructions, description, ingredients, servings, notes, nutrition } = body;

	const values = `${id}, '${name}', '${instructions}', '${JSON.stringify(ingredients)}', '${description}', ${servings}, '${notes}', '${JSON.stringify(nutrition)}'`;
	// Insert a row
	const insert = db.exec(
		`INSERT INTO recipes (id, name, instructions, ingredients, description, servings, notes, nutrition) VALUES (${values})`
	);

	return json(insert);
};

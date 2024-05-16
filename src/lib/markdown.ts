import remark_gfm from 'remark-gfm';
import remark_parse from 'remark-parse';
import { unified } from 'unified';

let sections_titles = ['Title', 'Servings', 'Description', 'Ingredients', 'Instructions', 'Notes'];
const file = unified().use(remark_parse).use(remark_gfm);

export async function get_sections(doc: string) {
	let sections: [number, number][] = [];

	await file().use(extract_sections_plugin).run(file.parse(doc));
	function extract_sections_plugin() {
		return function (tree: any) {
			sections_titles.forEach((section_title, i) => {
				tree.children.forEach((node: any) => {
					if (node.type === 'heading') {
						if (node.children[0].value === section_title) {
							sections.push([node.position.end.offset, 0]);
						}

						if (node.children[0].value === sections_titles[i + 1]) {
							sections[i][1] = node.position.start.offset;
						}
					}
				});
			});
		};
	}

	const parts = sections.reduce((acc, section, index) => {
		const [start, next_section] = section;
		let section_text = doc.slice(start, next_section || doc.length).trim();

		return {
			...acc,
			[sections_titles[index].toLowerCase()]: section_text
		};
	}, {} as any);

	parts.servings = parseInt(parts.servings.match(/(\d+)/)[1]);

	return parts;
}

import { createEventDispatcher } from 'svelte';

function make_resize_handler(min?: number) {
	return function resize({ target }: Event) {
		if (!(target instanceof HTMLTextAreaElement)) return;
		text_area_resizer(target, min);
	};
}

export function text_area_resizer(target: HTMLTextAreaElement, min?: number) {
	target.style.height = '1px';
	const height = Math.max(min || 0, target.scrollHeight);

	target.style.height = height + 5 + 'px';
}

/**
 *
 * @param {HTMLTextAreaElement} el
 * @param {{value: string}} Args
 * @returns
 */
export function text_area_resize(
	el: HTMLTextAreaElement,
	{ value, min_height }: { value?: string; min_height?: number }
) {
	let resize = make_resize_handler(min_height);
	text_area_resizer(el, min_height);
	el.style.overflow = 'hidden';

	el.addEventListener('input', resize);

	return {
		destroy: () => el.removeEventListener('input', resize),
		update: () => {
			el.removeEventListener('input', resize);
			resize = make_resize_handler(min_height);
			text_area_resizer(el, min_height);
		}
	};
}

export function make_event<T>() {
	const dispatch = createEventDispatcher<{
		data: T;
		done: boolean;
	}>();

	return dispatch;
}

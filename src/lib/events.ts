import { createEventDispatcher } from 'svelte';

export function make_event<T>() {
	const dispatch = createEventDispatcher<{
		data?: T;
		done?: boolean;
	}>();

	return dispatch;
}

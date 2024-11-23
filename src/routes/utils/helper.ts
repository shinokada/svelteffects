import type { Component } from 'svelte';
import { type ListType, sidebarList, CogOutline, ExpandOutline } from 'runes-webkit';

const extra: ListType[] = [
	{
		name: 'Effects',
		Icon: ExpandOutline as Component,
		href: '/effects'
	},
	{
		name: 'Guide',
		Icon: CogOutline as Component,
		href: '/guide'
	}
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];

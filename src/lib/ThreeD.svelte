<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		children: Snippet;
		color?: string;
		backgroundColor?: string;
		fontSize?: string;
		lineHeight?: string;
		fontWeight?: string;
		textShadow?: string;
		padding?: string;
		margin?: string;
	}

	let {
		children,
		color = '#fcdde8',
		backgroundColor = '#fbd7e3',
		fontSize = '2rem',
		lineHeight = '1.5',
		fontWeight = '400',
		padding = '1rem',
		margin,
		textShadow = '-0.0075em 0.0075em 0 #fef2f6, 0.005em 0.005em 0 #f6a5c1, 0.01em 0.01em 0 #f7aac4, 0.015em 0.015em #f7aec7, 0.02em 0.02em 0 #f8b3ca, 0.025em 0.025em 0 #f8b7cd, 0.03em 0.03em 0 #f8bcd0, 0.035em 0.035em 0 #f9c0d3',
		class: className,
		...restProps
	}: Props = $props();
</script>

<span
	{...restProps}
	class={className}
	style="
    display: inline-block;
    color: {color};
    background-color: {backgroundColor};
    font-size: {fontSize};
    line-height: {lineHeight};
    font-weight: {fontWeight};
    text-shadow: {textShadow};
    padding: {padding};
    margin: {margin};
  "
>
	{@render children()}
</span>

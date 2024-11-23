<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		href?: string;
		underlineStyle?: 'fadeIn' | 'slideIn' | 'scaleFromCenter';
		// Style props
		height?: string;
		color?: string;
		padding?: string;
		transitionDuration?: string;
		underlineOffset?: string;
	}

	let {
		children,
		href = '#',
		underlineStyle = 'fadeIn',
		// Default values for style props
		height = '0.1em',
		color = 'hotpink',
		padding = '0.2em',
		transitionDuration = '300ms',
		underlineOffset = '0.2em'
	}: Props = $props();

	// Create style objects
	const linkStyle = {
		'--underline-height': height,
		'--underline-color': color,
		'--underline-padding': padding,
		'--underline-duration': transitionDuration,
		'--underline-offset': underlineOffset
	};
</script>

<a
	{href}
	class={underlineStyle}
	style={Object.entries(linkStyle)
		.map(([key, value]) => `${key}:${value}`)
		.join(';')}
>
	{@render children()}
</a>

<style>
	/* Base styles */
	a {
		display: block;
		position: relative;
		padding: var(--underline-padding) 0;
		color: inherit;
		text-decoration: none;
	}

	/* Common underline styles */
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--underline-height);
		background-color: var(--underline-color);
		transition:
			opacity var(--underline-duration),
			transform var(--underline-duration);
	}

	/* Fade in */
	.fadeIn::after {
		opacity: 0;
	}

	.fadeIn:hover::after,
	.fadeIn:focus::after {
		opacity: 1;
		transform: translate3d(0, var(--underline-offset), 0);
	}

	/* Slide in */
	.slideIn {
		overflow: hidden;
	}

	.slideIn::after {
		opacity: 1;
		transform: translate3d(-100%, 0, 0);
	}

	.slideIn:hover::after,
	.slideIn:focus::after {
		transform: translate3d(0, 0, 0);
	}

	/* Scale from center */
	.scaleFromCenter::after {
		opacity: 1;
		transform: scale(0);
		transform-origin: center;
	}

	.scaleFromCenter:hover::after,
	.scaleFromCenter:focus::after {
		transform: scale(1);
	}
</style>

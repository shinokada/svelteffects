<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		bgColor?: string;
		shadowColor?: string;
		size?: string;
		align?: string;
		padding?: string;
		neonContainer?: string;
		color?: string;
	}

	let {
		children,
		neonContainer = 'w-[1000px] h-[500px] flex justify-center items-center',
		bgColor = '#192824',
		shadowColor = '#FF9E9E',
		size = '50',
		align = 'center',
		padding = '100px',
		color = 'white'
	}: Props = $props();
</script>

<div
	class={neonContainer}
	style="background-color: {bgColor}; --shadow-color: {shadowColor}; --shadow-color-light: white;"
>
	<div
		class="neon"
		style="font-size: {size}px; text-align: {align}; padding: {padding}; color: {color};"
	>
		{@render children()}
	</div>
</div>

<style>
	.neon {
		animation: neon 3s infinite;
	}

	@keyframes neon {
		0% {
			text-shadow:
				-1px -1px 1px var(--shadow-color-light),
				-1px 1px 1px var(--shadow-color-light),
				1px -1px 1px var(--shadow-color-light),
				1px 1px 1px var(--shadow-color-light),
				0 0 3px var(--shadow-color-light),
				0 0 10px var(--shadow-color-light),
				0 0 20px var(--shadow-color-light),
				0 0 30px var(--shadow-color),
				0 0 40px var(--shadow-color),
				0 0 50px var(--shadow-color),
				0 0 70px var(--shadow-color),
				0 0 100px var(--shadow-color),
				0 0 200px var(--shadow-color);
		}
		50% {
			text-shadow:
				-1px -1px 1px var(--shadow-color-light),
				-1px 1px 1px var(--shadow-color-light),
				1px -1px 1px var(--shadow-color-light),
				1px 1px 1px var(--shadow-color-light),
				0 0 5px var(--shadow-color-light),
				0 0 15px var(--shadow-color-light),
				0 0 25px var(--shadow-color-light),
				0 0 40px var(--shadow-color),
				0 0 50px var(--shadow-color),
				0 0 60px var(--shadow-color),
				0 0 80px var(--shadow-color),
				0 0 110px var(--shadow-color),
				0 0 210px var(--shadow-color);
		}
		100% {
			text-shadow:
				-1px -1px 1px var(--shadow-color-light),
				-1px 1px 1px var(--shadow-color-light),
				1px -1px 1px var(--shadow-color-light),
				1px 1px 1px var(--shadow-color-light),
				0 0 3px var(--shadow-color-light),
				0 0 10px var(--shadow-color-light),
				0 0 20px var(--shadow-color-light),
				0 0 30px var(--shadow-color),
				0 0 40px var(--shadow-color),
				0 0 50px var(--shadow-color),
				0 0 70px var(--shadow-color),
				0 0 100px var(--shadow-color),
				0 0 200px var(--shadow-color);
		}
	}
</style>

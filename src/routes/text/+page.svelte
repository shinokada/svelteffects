<script lang="ts">
	import { Text } from '$lib';
</script>

<ul>
	<li>
		<Text effect="fade" color="blue" hoverColor="red" fontSize="1.4em" transitionDuration="800ms">
			Fade Effect
		</Text>
	</li>
	<li>
		<Text
			effect="slideVertical"
			color="purple"
			hoverColor="green"
			fontSize="1.4em"
			transitionDuration="800ms"
		>
			Slide Vertical
		</Text>
	</li>
	<li>
		<Text
			effect="slideHorizontal"
			color="orange"
			hoverColor="blue"
			fontSize="1.4em"
			transitionDuration="800ms"
		>
			Slide Horizontal
		</Text>
	</li>
	<li>
		<Text
			effect="scale"
			color="gray"
			hoverColor="hotpink"
			fontSize="1.4em"
			transitionDuration="800ms"
		>
			Scale Effect
		</Text>
	</li>
	<li>
		<Text
			effect="rotate"
			color="darkgreen"
			hoverColor="orange"
			fontSize="1.4em"
			transitionDuration="800ms"
		>
			Rotate Effect
		</Text>
	</li>
</ul>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}
</style>

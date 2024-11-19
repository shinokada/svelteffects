<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
    href?: string;
    effect?: "fade" | "slideVertical" | "slideHorizontal" | "scale" | "rotate";
    // Style props
    color?: string;
    hoverColor?: string;
    fontSize?: string;
    padding?: string;
    transitionDuration?: string;
  }

  let { 
    children, 
    href = '#', 
    effect = 'fade',
    // Default values for style props
    color = 'black',
    hoverColor = 'hotpink',
    fontSize = '1em',
    padding = '0.2em',
    transitionDuration = '300ms',
  }: Props = $props();

  const linkStyle = {
    '--text-color': color,
    '--hover-color': hoverColor,
    '--font-size': fontSize,
    '--padding': padding,
    '--duration': transitionDuration,
  };
</script>

<a 
  {href} 
  class={effect}
  style={Object.entries(linkStyle).map(([key, value]) => `${key}:${value}`).join(';')}
>
  <span class="original">{@render children()}</span>
  <span class="hover">{@render children()}</span>
</a>

<style>
  /* Base styles */
  a {
    display: inline-block;
    position: relative;
    padding: var(--padding);
    font-size: var(--font-size);
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    perspective: 1000px;
  }

  span {
    display: inline-block;
    transition: all var(--duration) ease;
  }

  .original {
    color: var(--text-color);
  }

  .hover {
    color: var(--hover-color);
    position: absolute;
    left: var(--padding);
    top: var(--padding);
  }

  /* Fade effect */
  .fade .hover {
    opacity: 0;
  }

  .fade:hover .original {
    opacity: 0;
  }

  .fade:hover .hover {
    opacity: 1;
  }

  /* Slide Vertical effect */
  .slideVertical .hover {
    transform: translateY(100%);
    opacity: 0;
  }

  .slideVertical:hover .original {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slideVertical:hover .hover {
    transform: translateY(0);
    opacity: 1;
  }

  /* Slide Horizontal effect */
  .slideHorizontal .hover {
    transform: translateX(100%);
    opacity: 0;
  }

  .slideHorizontal:hover .original {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slideHorizontal:hover .hover {
    transform: translateX(0);
    opacity: 1;
  }

  /* Scale effect */
  .scale .hover {
    transform: scale(0);
    opacity: 0;
  }

  .scale:hover .original {
    transform: scale(0);
    opacity: 0;
  }

  .scale:hover .hover {
    transform: scale(1);
    opacity: 1;
  }

  /* Rotate effect */
  .rotate .original {
    transform-origin: 50% 100%;
    transform: perspective(1000px) rotateX(0);
    backface-visibility: hidden;
  }

  .rotate .hover {
    transform-origin: 50% 0%;
    transform: perspective(1000px) rotateX(-180deg);
    backface-visibility: hidden;
  }

  .rotate:hover .original {
    transform: perspective(1000px) rotateX(180deg);
  }

  .rotate:hover .hover {
    transform: perspective(1000px) rotateX(0);
  }
</style>
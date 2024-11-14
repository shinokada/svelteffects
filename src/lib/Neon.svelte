<script lang="ts">
	import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    bgColor?: string;
    size?: string;
    align?: string;
    padding?: string;
    neonContainer?: string;
  }

  let {children, 
  neonContainer = 'w-[1000px] h-[500px] flex justify-center items-center',
  bgColor = '#192824', size="50", align="center", padding="100px" }: Props = $props();
</script>

<div class="neon-container" style="background-color: {bgColor}; --shadow-color: #FF9E9E; --shadow-color-light: white;">
<div class="neon" style="font-size: {size}px; text-align: {align}; padding: {padding};">{@render children()}</div>
</div>

<style>  
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');

  .neon-container {
    
    width: 1000px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Archivo", sans-serif;
  }

  .neon {
    font-family: "Archivo Black", "Archivo", sans-serif;
    font-weight: normal;
    display: block;
    height: auto;
    color: white;
    animation: neon 3s infinite;
  }
  
  @keyframes neon {
    0% {
      text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),
      0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),
      0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
    }
    50% {
      text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),
      0 0 5px var(--shadow-color-light), 0 0 15px var(--shadow-color-light), 0 0 25px var(--shadow-color-light),
      0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 80px var(--shadow-color), 0 0 110px var(--shadow-color), 0 0 210px var(--shadow-color);
    }
    100% {
      text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),
      0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),
      0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
    }
  }
  </style>
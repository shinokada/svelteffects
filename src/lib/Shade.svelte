<script lang="ts">
	import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    bgColor?: string;
    color?: string;
    padding?: string;
    size?: number;
  }
  let { children, bgColor = '#d0d0d0', color = '#444',  size = 10, padding="50px" }: Props = $props();
</script>


<div class="container" style="background-color: {bgColor};
     color: {color}; padding: {padding};">
  <svg class="svg-text" style="font-size: {size}vw;" width="100%" height="1.5em" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="drop-stroke-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="2" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
      <symbol id="stroke-2"><text class="bold" x="50%" y="67%" fill="none" stroke-width=".1em" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke fill" text-anchor="middle">
        {@render children()}
      </text></symbol>
      <symbol id="fill-2"><text class="bold" x="50%" y="60%" text-anchor="middle">
        {@render children()}
      </text></symbol>
    </defs>
    <g class="svg-text__shaded__stroke" stroke="#00cccc">
        <use y="5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#stroke-2" opacity="0.5" filter="url(#drop-stroke-shadow)"></use>
        <use y="3%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#stroke-2"></use>
        <use y="2%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#stroke-2"></use>
        <use y="1%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#stroke-2"></use>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#stroke-2" stroke="cyan"></use>
    </g>
    <g fill="#e6e6e6">
        <use class="svg-text__shaded" y="7%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="6.5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="6%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="5.5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="4.5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="4%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="3.5%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2"></use>
        <use y="3%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fill-2" fill="white"></use>
    </g>
  </svg>
</div>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700');
  @import url('https://fonts.googleapis.com/css?family=Kreon:300,700');
  
  .container {
     text-align: center;
     font-family: 'Open Sans', sans-serif;
     font-weight: 300;
     line-height: 1em;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
  }

  .svg-text {
     transform: rotateX(30deg);
     font-family: 'Kreon', serif;
     transition: all 0.6s ease-in-out;
     color: #f0f0f0;
  }

  .svg-text__shaded {
     text-shadow: 0 1px 1px rgba(33, 33, 33, .15),
                  0 3px 10px rgba(33, 33, 33, .15),
                  0 3px 20px rgba(33, 33, 33, .35);
  }

  .svg-text__shaded__stroke {
     stroke-dasharray: 3em 0.5em;
     stroke-dashoffset: 0;
     transition: all 0.6s ease-in-out;
  }

  .svg-text .bold {
     font-size: 0.5em;
     font-family: 'Kreon', sans-serif;
     font-weight: 700;
  }

  .svg-text:hover {
     cursor: pointer;
  }

  .svg-text:hover .svg-text__shaded__stroke {
     animation: offsetAnim 4.2s ease-in-out infinite;
  }

  @keyframes offsetAnim {
     70%, 100% {
       stroke-dashoffset: 3.5em;
    }
  }
</style>
<script lang="ts">
import type { Snippet } from 'svelte';
interface Props {
  children: Snippet;
  neon?: number;
  padding?: string;
  align?: string;
  bgColor?: string;
  bgImg?: string;
  height?: string;
  width?: string;
  size?: number;
  opacity?: number;
}
let { children, neon = 1, padding = "100px", align = 'center', bgColor="#090000", bgImg, height = "300px", width="1000px", size =6, opacity = 0.75}: Props = $props();
</script>

<div class="container" 
     style="padding: {padding}; 
            text-align: {align}; 
            background-color: {bgColor}; 
            justify-content: center;
            align-items: center; 
            font-size: {size}vw;
            position: relative;
            height: {height};
            width: {width};">
  {#if bgImg}
    <div class="background-overlay" 
         style="background-image: url('{bgImg}'); 
                opacity: {opacity};"></div>
  {/if}
  <x-sign class="neon-{neon}">
    {@render children()}
  </x-sign>
</div>

<style>
  @import url(https://fonts.googleapis.com/css?family=Bad+Script|Gruppo|Kumar+One+Outline|League+Script|Londrina+Outline|Monoton|Sriracha|Yellowtail&amp;text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?+);
  
  .container {
    justify-content: center;
    align-items: center;
    line-height: 1.1;
  }
  
  .background-overlay {
    content: "";
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  
  x-sign {
    --interval: 1s;
    display: block;
    text-shadow: 
      0 0 10px var(--color1),
      0 0 20px var(--color2),
      0 0 40px var(--color3),
      0 0 80px var(--color4);
    will-change: filter, color;
    filter: saturate(60%);
    animation: flicker steps(100) var(--interval) 1s infinite;
  }
  
  .neon-1 {
    color: yellow;
    --color1: goldenrod;
    --color2: orangered;
    --color3: mediumblue;
    --color4: purple;
    font-family: Gruppo;
  }
  
  .neon-2 {
    color: lightpink;
    --color1: pink;
    --color2: orangered;
    --color3: red;
    --color4: magenta;
    font-family: Bad Script;
  }
  
  .neon-3 {
    color: lightyellow;
    --color1: yellow;
    --color2: lime;
    --color3: green;
    --color4: mediumblue;
    font-family: Kumar One Outline;
  }
  
  .neon-4 {
    color: lightyellow;
    --color1: gold;
    --color2: firebrick;
    --color3: pink;
    --color4: red;
    font-family: Londrina Outline;
  }
  
  
  .neon-5 {
    color: azure;
    --color1: azure;
    --color2: aqua;
    --color3: dodgerblue;
    --color4: blue;
    font-family: Sriracha;
  }
  
  .neon-6 {
    color: tomato;
    --color1: orangered;
    --color2: firebrick;
    --color3: maroon;
    --color4: darkred;
    font-family: Yellowtail;
  }
  
  .neon-7 {
    color: lightyellow;
    --color1: yellow;
    --color2: orange;
    --color3: brown;
    --color4: purple;
    font-family: Bad Script;
  }
  
  .neon-8 {
    color: yellow;
    --color1: yellow;
    --color2: lime;
    --color3: green;
    --color4: darkgreen;
    font-family: Monoton;
  }
  
  .neon-9 {
    color: lightyellow;
    --color1: yellow;
    --color2: gold;
    --color3: orange;
    --color4: darkred;
    font-family: Sriracha;
  }
  
  @keyframes flicker {
    50% {
      color: white;
      filter: saturate(200%) hue-rotate(20deg);
    }
  }
  </style>
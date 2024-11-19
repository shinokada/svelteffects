<script lang="ts">
  import { Underline } from "$lib"
</script>

<ul>
  <li>
    <Underline 
      href="#0" 
      color="red"
      height="0.2em"
      padding="0.3em"
      transitionDuration="500ms"
      underlineOffset="0.3em"
    >
      Thick Red Underline
    </Underline>
  </li>
  <li>
    <Underline 
      href="#0" 
      underlineStyle="slideIn"
      color="blue"
      height="0.15em"
    >
      Blue Sliding Underline
    </Underline>
  </li>
  <li>
    <Underline 
      href="#0" 
      underlineStyle="scaleFromCenter"
      color="green"
      height="0.08em"
      transitionDuration="200ms"
    >
      Quick Green Scale
    </Underline>
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
  }

  li {
    margin: 0 2rem;
  }
</style>
<script setup></script>
<template>
  <h2>This is Slot Component</h2>
  <slot>
    <h3>I am the fallback content</h3>
  </slot>
  <slot name="one"></slot>
  <slot name="two"></slot>
</template>

<script setup>
import SlotComponent from './SlotComponent.vue';
</script>
<template>
  <div class="card">
    <h2>8.Slot | Fallback for slot | Named Slots | Default Slot</h2>
    <SlotComponent>
      <template #default>
        <!-- <p>Default Slot. Content from Parent to child</p> -->
      </template>
      <template v-slot:one>
        <p>
          <i>One Slot:The content Parent Passed to slot child</i>
        </p>
      </template>
      <template #two>
        <h3>For The Name Two Slot</h3>
      </template>
    </SlotComponent>
  </div>
</template>

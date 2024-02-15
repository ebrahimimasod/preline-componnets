<script setup>
import Switch from "@/components/Switch/index.vue";
</script>
<template>
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">Switch</h2>
  </div>
  <!-- size -->
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">Size</h2>
    <div div class="flex flex-col gap-4">
      <div class="flex">
        <Switch size="extrasm" />
        <label class="text-sm text-gray-500 ms-3 ml-[22px]">Extra small</label>
      </div>

      <div class="flex">
        <Switch size="sm" />
        <label class="text-sm text-gray-500 ml-[20px]">small</label>
      </div>

      <div class="flex">
        <Switch size="md" />
        <label class="text-sm text-gray-500 ml-[20px]">Medium</label>
      </div>
      <div class="flex">
        <Switch size="lg" />
        <label class="text-sm text-gray-500 ml-[20px]">Large</label>
      </div>
    </div>
  </div>
  <!-- variant -->
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">variant</h2>
    <div class="flex item-center justify-start  ">
      <Switch  variant="secondary" />
    <Switch  variant="warning" />
    <Switch  variant="danger" />
    <Switch />
    </div>
  </div>
  <!-- icon -->
  <span class="peer-checked:text-blue-600 text-gray-500 text-gray-500 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
<div class="container">
  <h2 class="mb-4 font-semibold text-2xl">Icon</h2>

</div>


</template>
<style>
.container {
  @apply p-10 border-[1px]  w-full border-slate-300 rounded-lg m-auto mt-[15px] bg-white shadow-md;
}
</style>

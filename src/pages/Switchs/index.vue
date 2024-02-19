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
        <Switch size="extrasm"/>
        <label class="text-sm text-gray-500 ms-3 ml-[22px]">Extra small</label>
      </div>

      <div class="flex">
        <Switch size="sm"/>
        <label class="text-sm text-gray-500 ml-[20px]">small</label>
      </div>

      <div class="flex">
        <Switch size="md"/>
        <label class="text-sm text-gray-500 ml-[20px]">Medium</label>
      </div>
      <div class="flex">
        <Switch size="lg"/>
        <label class="text-sm text-gray-500 ml-[20px]">Large</label>
      </div>
    </div>
  </div>
  <!-- variant -->
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">variant</h2>
    <div class="flex item-center justify-start  ">
      <Switch variant="secondary"/>
      <Switch variant="warning"/>
      <Switch variant="danger"/>
      <Switch/>
    </div>
  </div>
  <!-- icon -->
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">Icon</h2>

    <Switch
        on-icon="check"
        off-icon="x"/>

  </div>
</template>


<style>
.container {
  @apply p-10 border-[1px]  w-full border-slate-300 rounded-lg m-auto mt-[15px] bg-white shadow-md;
}
</style>

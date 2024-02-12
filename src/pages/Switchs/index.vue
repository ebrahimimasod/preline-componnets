<script setup>
import Switch from "@/components/Switch/index.vue" ;
</script>
<template>
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">Switch</h2>
    <Switch
      on-icon="check"
      off-icon="close"
    />
  </div>
  <div class="container">
    <h2 class="mb-4 font-semibold text-2xl">Size</h2>
    <div class="flex flex-col ">
      <Switch  size="sm"/>
      <Switch  size="md"/>

    </div>

  </div>

</template>
<style>
.container {
  @apply p-10 border-[1px]  w-full border-slate-300 rounded-lg m-auto mt-[15px] bg-white shadow-md;
}
</style>
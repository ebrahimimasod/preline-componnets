<script setup>
import Select from "@/components/selects/index.vue";
import {ref} from "vue"

const value = ref();
const selectOptions = [
  {
    value: 1,
    label: 'option 1'
  },
  {
    value: 2,
    label: 'option 2'
  },
  {
    value: 3,
    label: 'option 3'
  },
  {
    value: 4,
    label: 'option 4'
  },
];
</script>

<template>
  <div class="w-2/3">
    <div class="container">
      <!-- defult -->
      <Select
          v-model="value"
          :options="selectOptions"/>
      {{ console.log(value) }}
    </div>
    <!-- gray-select-->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">Gray select</h2>
      <Select v-model="value"
              variant="gary"
              :options="selectOptions"
      />
    </div>
    <!-- size -->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">Size</h2>
      <Select v-model="value"
              size="sm"
              :options="selectOptions"
      />
      <Select v-model="value"
              size="md"
              :options="selectOptions"/>

      <Select v-model="value"
              size="lg"
              :options="selectOptions"
      />

    </div>
    <!-- rouded-select-->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">rounded</h2>
      <Select v-model="value"
              rounded
              :options="selectOptions"/>

    </div>
    <!-- Disable-->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">Disabel</h2>

      <Select disabled
              :options="selectOptions"/>

      <Select variant="gary" disabled
              :options="selectOptions"
      />

    </div>
    <!-- floating label -->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">floatingLabel</h2>

      <!-- <div class="mt-[-45px] ml-[10px] pb-5">
              <label class="text-sm">Label</label>

      </div> -->
    </div>

    <!-- Validation states -->
    <div class="container">
      <h2 class="mb-4 font-semibold text-2xl">validation</h2>
      <Select v-model="value"
              variant="danger"
              :options="selectOptions"
      />

      <small class="text-sm text-red-600">Please select a valid state. </small>

      <Select v-model="value"
          class="mt-5" variant="success"
              :options="selectOptions"/>

      <small class="ext-sm text-green-600">Looks good. </small>
    </div>
    <div class="w-32 h-8"></div>
  </div>
</template>
<style>
.container {
  @apply p-10 border-[1px]  w-full border-slate-300 rounded-lg m-auto mt-[15px] bg-white shadow-md;
}
</style>

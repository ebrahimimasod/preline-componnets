<script setup xmlns="http://www.w3.org/1999/html">
import {defineProps, defineEmits, computed, ref, useSlots, onMounted} from 'vue'

const slots = useSlots();
const emits = defineEmits("update:modelValue")
const props = defineProps([
  'placeholder',
  'type',
  'modelValue',
  "label",
  "size",
  "basic",
  "grayInput",
  'floating',
  "icon",
  "pilled"
]);


const InputClasses = computed(() => {
  const classes = ["inputStyle pl-[50px]"];

  if (props.basic) {
    classes.push("basic");
  }
  classes.push(props.size);
if(props.floating){
  classes .push("floating")
}
if(props.pilled){
  classes.push("pilled")
}
  return classes;
});


const inputComputed = computed({
  get() {
    return props.modelValue
    console.log(props.modelValue)

  },
  set(value) {
    emits('update:modelValue', value, props.modelValue = "")
  }
})

onMounted(() => {
  console.log({slots});
});

</script>
<template>
  <div class="flex flex-col">
    <slot v-if="slots.label" name="label"/>
    <label v-else-if="label" class="mb-2">{{ label }}</label>

    <input :type="type" :class="InputClasses" :placeholder="placeholder" v-model="inputComputed"/>
    <div v-if="slots.icon" class="absolute mt-2 ml-2">
      <slot name="icon"/>
    </div>

  </div>
</template>
<style scoped>
.inputStyle.basic {
  @apply relative pl-[40px] py-3 px-4 w-96 border border-gray-200 rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400;
}

.inputStyle.sm {
  @apply py-2 px-3
}

.inputStyle.md {
  @apply py-3 px-4
}

.inputStyle.lg {
  @apply p-4 sm:p-5
}

.inputStyle.grayInput {
  @apply py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm
  focus:border-t-transparent focus:border-x-transparent
  focus:border-b-blue-500 focus:ring-0 disabled:opacity-50
  disabled:pointer-events-none dark:border-b-gray-700
  dark:text-gray-400 dark:focus:ring-gray-600
  dark:focus:border-b-gray-600;
}

.inputStyle.floating {
  @apply

  pl-[40px] py-3 px-4 w-96 border border-gray-200 rounded-lg text-sm  placeholder:text-transparent
  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2;
}

.inputStyle.pilled{
  @apply py-3 px-4 w-96 border border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600;
}

</style>

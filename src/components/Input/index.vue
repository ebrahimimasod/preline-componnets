<script setup>
import Icon from "@/components/Icon/index.vue"
import {defineProps, defineEmits, computed, ref, useSlots, onMounted} from 'vue'

const slots = useSlots();
const emits = defineEmits(["update:modelValue"])
//const props1 = defineProps([
  //'placeholder',
  //'variant',
  //'type',
  //'modelValue',
  //"label",
  //"size",
  //"basic",
  //"grayInput",
  //'floating',
  //"icon",
  //"rounded",
//]);

const props=defineProps({
      placeholder:{
      type: String
      },
      variant: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'input',
      },
      label: {
        type: String
      },

      basic:{
        type:Boolean,
        default:false
      },
      size:{
        type:String
      },
      floating:{
        type:Boolean,
        default:false
      },
      icon: {
        type: String
      },
      rounded:{
        type:  Boolean,
        default:false
      }
},
)
const InputClasses = computed(() => {
  const classes = ["input"];

  if (props.basic) {
    classes.push("basic");
  }


  classes.push(props.size);
  classes.push(props.variant)

  if (props.floating) {
    classes.push("floating")
  }


  if (props.rounded) {
    classes.push("rounded")
  }

  return classes;
});


const inputComputed = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value, props.modelValue = "")
  }
})


</script>

<template>
  <div class="input-wrapper">

    <slot v-if="slots.label" name="label"/>
    <label v-else-if="label" class="mb-2">{{ label }}</label>

    <div class="relative">
      <input :type="type" :class="InputClasses" :placeholder="placeholder" v-model="inputComputed"/>

      <div v-if="slots.icon" class="absolute left-3 bottom-0 top-0 flex items-center">
        <slot name="icon"/>
      </div>
      <div v-if="variant === 'danger'" class="absolute right-3 bottom-0 top-0 flex items-center">
        <Icon name="AlertCircle" color="red"/>
      </div>

    </div>
   <div  v-if="slots.message" class="mt-1">
     <slot name="message"/>
   </div>

  </div>
</template>

<style scoped>

.input-wrapper {
  @apply flex flex-col;
}

.input.basic {
  @apply relative pl-[40px] py-3 px-4 w-96 border border-gray-200 rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400;
}

.input.sm {
  @apply py-2 px-3
}

.input.md {
  @apply py-3 px-4
}
.input.lg {
  @apply p-4 sm:p-5
}
.input.floating {

}
.input.rounded {
  @apply py-3 px-4 w-96 border border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600;
}

.input.danger {
  @apply pl-[40px] py-3 px-4 w-96 border-2 border-danger-500  focus:border-danger-500 focus:ring-blue-500   rounded-lg text-sm  placeholder:text-transparent;
}
</style>
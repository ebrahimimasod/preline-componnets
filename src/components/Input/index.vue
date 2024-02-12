<script setup>
import Icon from "@/components/Icon/index.vue"
import {defineProps, defineEmits, computed, ref, useSlots, onMounted} from 'vue'

const slots = useSlots();
const emits = defineEmits(["update:modelValue"])

const props = defineProps({
      placeholder: {
        type: String
      },
      variant: {
        type: String,
        default: 'default'
      },

      type: {
        type: String,
        default: 'text',
      },


      label: {
        type: String
      },

      variantDisabled: {
        type: String,
        default: "default"
      },

      size: {
        type: String,
      },

      floating: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      rounded: {
        type: Boolean,
        default: false
      },
    },
)
const InputClasses = computed(() => {
  const classes = ["input"];

  classes.push(props.size);
  classes.push(props.variant)

  if (props.floating) {
    classes.push("floating")
  }

  if (props.rounded) {
    classes.push("rounded")
  }

  if (props.variantDisabled) {
    classes.push("variantDisabled")
  }

  if (props.disabled) {
    classes.push("disabled")
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
      <input :type="type"
             :class="InputClasses"
             :placeholder="placeholder"
             :disabled="disabled"
             v-model="inputComputed"/>

      <div v-if="slots.icon" class="absolute left-3 bottom-0 top-0 flex items-center">
        <slot name="icon"/>
      </div>
      <div v-if="variant === 'danger'" class="absolute right-3 bottom-0 top-0 flex items-center">

        <Icon name="AlertCircle" color="red"/>
      </div>

    </div>
    <div v-if="slots.message" class="mt-1">
      <slot name="message"/>
    </div>

  </div>
</template>

<style scoped>

.input-wrapper {
  @apply flex flex-col w-full;
}

.input {
  outline: none !important;
  @apply py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm !ring-0  focus:border-primary-600 disabled:opacity-50  ;
}

.input.disabled {
  cursor: not-allowed !important;
}

.input.sm {
  @apply py-2 px-3 focus:border-primary-600;
}

.input.md {
  @apply py-3 px-4 focus:border-primary-600;
}

.input.lg {
  @apply p-4 sm:p-5 focus:border-primary-600;
}

.input.rounded {
  @apply py-3 px-4 w-96 rounded-full text-sm
  focus:border-blue-500
  disabled:opacity-50 ;
}

.input.danger {
  @apply pl-[40px] py-3 px-4 w-96 border-2 border-danger-600

  rounded-lg text-sm  placeholder:text-transparent;
}

.input.primary {
  @apply pl-[40px] py-3 px-4 w-96 border-2 border-primary-600
  rounded-lg text-sm  placeholder:text-transparent;
}

.input.success {
  @apply pl-[40px] py-3 px-4 w-96 border-2 border-success-500

  rounded-lg text-sm  placeholder:text-transparent ;
}

.input.warning {
  @apply pl-[40px] py-3 px-4 w-96 border-2 border-warning-600
  rounded-lg text-sm  placeholder:text-transparent;
}

.input.gray {
  @apply pl-[40px]  py-3 px-4
  rounded-lg text-sm  placeholder:text-transparent
}

input.gray-fill {
  @apply pl-[40px] w-96  rounded-lg bg-gray-50 placeholder-gray-300 ;
}

input.gray-line {
  @apply pl-[40px]  py-3 px-4 rounded-lg bg-gray-50 placeholder-gray-300 ;
}

input.disabledInput {
  @apply pl-[40px] py-3 px-4 ps-11 block w-full bg-gray-400 border-transparent rounded-full text-sm
  placeholder-gray-300  disabled:opacity-50
  dark:bg-gray-700;
}


</style>
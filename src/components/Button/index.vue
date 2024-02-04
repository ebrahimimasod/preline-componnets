<script setup>
import {defineProps, computed} from "vue";

// const props = defineProps([
//   "type", // string (submit OR button)
//   "variant", //string (primary, success, danger, warning, default)
//   "size",
//   "outlined",//boolean
//   "ghost",//boolean
//   "link",//boolean
//   "rounded",//boolean
//   "block",//boolean
//   "icon",//boolean
//   "loading",//boolean
//   "a",
//   "disabled",//boolean
// ]);


const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'default', //(primary, success, danger, warning, default)
    // validator(value, props) {
    //   const variants = ['primary', 'success', 'danger', 'warning', 'default'];
    //   if(!variants.includes(value)){
    //     console.log('error')
    //   }
    // }
  },
  size: {
    type: String,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});


const btnClasses = computed(() => {

  const classes = ["btn"];

  classes.push(props.variant);

  classes.push(props.size);

  if (props.outlined) {
    classes.push("outlined");
  }

  if (props.link) {

    classes.push("link");
  }
  if (props.size) {
    classes.push("size")
  }
  if (props.ghost) {
    classes.push("ghost")
  }
  if (props.link) {
    classes.push("link")
  }
  if (props.rounded) {
    classes.push("rounded")
  }
  if (props.block) {
    classes.push("block")
  }
  if (props.icon) {
    classes.push("icon")
  }
  if (props.loading) {
    classes.push("loading")
  }
  //loadinglarge
  if (props.a) {
    classes.push("a")
  }
  if (props.disabled) {
    classes.push("disabled")
  }


  return classes;
});
</script>

<template>
  <button
      :type="type"
      :class="btnClasses"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<style scoped>

.btn {
  outline: none !important;
  @apply py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 ;
}

.btn.primary {
  @apply bg-primary-600 text-white hover:bg-primary-500;
}

.btn.secondary {
  @apply bg-secondary-600 text-white hover:bg-secondary-500 ;
}

.btn.warning {
  @apply bg-warning-600 text-white hover:bg-warning-500 ml-3 ;
}

.btn.danger {
  @apply bg-danger-600 text-white hover:bg-danger-500 ;
}

.btn.gray {
  @apply bg-gray-600 text-white hover:bg-gray-500 ;
}

.btn.success {
  @apply bg-success-500 text-white hover:bg-success-400;
}

.btn.outlined {
  @apply border bg-transparent border-gray-600 text-gray-500 hover:border-gray-400 hover:text-gray-500;
}

.btn.outlined.primary {
  @apply border bg-transparent  border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none;
}

.btn.outlined.success {
  @apply border bg-transparent border-success-500 text-success-500 hover:border-success-400 hover:text-success-400 disabled:opacity-50 disabled:pointer-events-none ;
}

.btn.outlined.danger {
  @apply border bg-transparent border-danger-500 text-danger-500 hover:border-danger-400 hover:text-danger-400 disabled:opacity-50 disabled:pointer-events-none ;
}

.btn.outlined.warning {
  @apply border bg-transparent border-warning-600 text-warning-600 hover:border-warning-500 hover:text-warning-500 disabled:opacity-50 disabled:pointer-events-none ;
}

.btn.outlined.gray {
  @apply border bg-transparent border-gray-500 text-gray-700 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}

.btn.link {
  @apply !bg-transparent text-primary-600  disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}

.btn.ghost {
  @apply bg-transparent  text-gray-400  hover:bg-gray-100;
}

.btn.rounded {
  @apply rounded-full border !text-gray-400 !border-gray-100
}

.btn.rounded.primary {
  @apply bg-primary-600 !border-none !text-white hover:bg-primary-500;
}

.btn.rounded.warning {
  @apply bg-warning-600 !border-none !text-white hover:bg-warning-500;
}

.btn.rounded.danger {
  @apply bg-danger-600 !border-none !text-white hover:bg-danger-500;
}

.btn.rounded.gray {
  @apply bg-gray-600 !border-none !text-white hover:bg-gray-500;
}

.btn.rounded.success {
  @apply bg-green-600 !border-none !text-white hover:bg-green-500;
}

.btn.ghost.primary {
  @apply text-primary-600 hover:bg-primary-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400
}

.btn.ghost.success {
  @apply text-success-500 hover:bg-success-50 disabled:opacity-50 disabled:pointer-events-none
}

.btn.ghost.danger {
  @apply text-danger-500 hover:bg-danger-50 disabled:opacity-50 disabled:pointer-events-none
}

.btn.ghost.warning {
  @apply text-warning-500 hover:bg-warning-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400
}

.btn.small {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none
}

.btn.large {
  @apply p-4 sm:p-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.link {
  @apply inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none
}

.btn.rounded {
  @apply border rounded-full  border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
}

.btn.block {
  @apply w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border
}

.btn.sm {
  @apply py-2 px-3 ;
}

.btn.md {
  @apply py-3 px-4 ;
}

.btn.lg {
  @apply py-4 px-5 ;
}

.btn.loading {
  @apply pointer-events-none select-none text-transparent relative;
}


.btn.loading::after {
  @apply animate-spin rounded-full border-white inline-block border-2 border-solid;
  content: "";
  border-bottom-color: transparent !important;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}


.btn.disabled {
  @apply py-3 px-4 inline-flex items-center gap-x-2
  text-sm font-semibold rounded-lg border border-transparent
  bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50
  disabled:pointer-events-none dark:focus:outline-none;
}


.btn.icon {
  @apply rounded-full w-9 h-9 bg-white p-2 flex items-center justify-center
}


.btn.icon.outlined {
  @apply rounded-full w-9 h-9 bg-white p-2 flex items-center justify-center border border-gray-100
}

.btn.icon.primary {
  @apply rounded-full w-9 h-9 bg-primary-600 p-2 flex items-center justify-center
}

</style>
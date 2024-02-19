<script setup>
import {defineProps, computed, onMounted} from 'vue';
import * as icons from 'lucide-vue-next'; // object contains as icons

const props = defineProps(
    [
      'name',
      'size',
      'color',
      'stroke-width'
    ]);


function capitalFirstCharacter(text) {
  const firstLetter = text.charAt(0)

  const firstLetterCap = firstLetter.toUpperCase()

  const remainingLetters = text.slice(1)

  return firstLetterCap + remainingLetters
}

const icon = computed(() => {
    return icons[capitalFirstCharacter(props.name)];
})

</script>

<template>
  <div>
    <component
        :is="icon"
        :size="size"
        :color="color"
        :stroke-width="props['stroke-width']"/>
  </div>
</template>
    
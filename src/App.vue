<script setup>
import Button from "@/components/Button/index.vue";
</script>

<template>
  <div class="p-10">
    <Button
        variant="secondary"
    >
      button secondary
    </Button>

    <hr class="my-6">
    <Button
        variant="info"
    >
      button info
    </Button>

    <hr class="my-6">
    <Button
        variant="primary"
    >
      button primary
    </Button>

    <hr class="my-6">

    <Button size="large">
      button large
    </Button>
    <hr class="my-6">

    <Button :outlined="true">
      button outlined
    </Button>
    <hr class="my-6">

    <Button :link="true">
      button link
    </Button>
  </div>
</template>



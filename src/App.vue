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
   

    <hr class="my-6">
    <Button
        variant="primary"
    >
      button primary
    </Button>
    <Button
    variant="warning">
    button warning
    </Button>
    <Button
    variant="danger">
    button danger
    </Button>
    
    <Button
    variant="gray">
    button gray
    </Button>
    <Button
    variant="success">
    button success
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



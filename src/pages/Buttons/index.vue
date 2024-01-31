<script setup>

import Button from "@/components/Button/index.vue"
import Icon from "@/components/Icon/index.vue"

</script>


<template>
  <div>

    <!--  Colors Variant-->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Colors Variant</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2" variant="secondary">
          button secondary
        </Button>

        <Button class="ml-2" variant="primary">
          button primary
        </Button>
        <Button class="ml-2" variant="warning">
          button warning
        </Button>
        <Button class="ml-2" variant="danger">
          button danger
        </Button>

        <Button class="ml-2" variant="gray">
          button gray
        </Button>
        <Button class="ml-2" variant="success">
          button success
        </Button>

      </div>

    </div>
    <!-- Size -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Size</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2" size="sm" variant="primary">
          button small
        </Button>

        <Button class="ml-2" size="md" variant="primary">
          button default
        </Button>

        <Button class="ml-2" size="lg" variant="primary">
          button large
        </Button>

      </div>

    </div>
    <!-- Outlined -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4  ml-2 font-semibold text-2xl">Outlined</h2>

      <div class="flex items-center  justify-start  ">
        <Button
            outlined="true"

        >
          Button outlined default
        </Button>


        <Button class="mr-3"
                outlined="true"
                variant="primary"
        >

          Button outlined primary
        </Button>
        <Button class="mr-3"
                outlined="true"
                variant="success"

        >

          Button outlined green
        </Button>
        <Button
            outlined="true"
            variant="danger"

        >

          Button outlined danger
        </Button>
        <Button
            outlined="true"
            variant="warning"

        >

          Button outlined warning
        </Button>


      </div>

    </div>
    <!-- Ghost -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4  ml-2 font-semibold text-2xl">Ghost</h2>

      <div class="flex items-center  justify-start  ">
        <Button class="mr-2">
          Button outlined success
        </Button>

        <Button :ghost="true" variant="primary">
          Button outlined primary
        </Button>

        <Button :ghost="true"
                variant="success">
          Button outlined success
        </Button>

        <Button :ghost="true"
                variant="danger">
          Button outlined danger
        </Button>
        <Button :ghost="true"
                variant="warning">
          Button outlined warning
        </Button>


      </div>

    </div>
    <!-- Link -->

    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Link</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                :link="true"
                variant="primary">
          button primary
        </Button>

      </div>


    </div>
    <!-- Pilled -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Pilled</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                :Pilled="true"
                variant="primary"
        >
          button Pilled
        </Button>

      </div>


    </div>
    <!-- Block -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Block</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                :block="true"
                variant="primary"
        >
          button Block
        </Button>

      </div>


    </div>
    <!-- icon -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Icon</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                :icon="true"
                variant="primary"
        >
          button Icon

          <Icon name="camera" />

<!--          <Camera/>-->
        </Button>

      </div>


    </div>


  </div>
</template>
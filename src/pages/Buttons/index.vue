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
        <Button outlined>
          Button outlined default
        </Button>
        <Button class="ml-3 mr-3" outlined variant="primary">

          Button outlined primary
        </Button>
        <Button class="mr-3"
                outlined
                variant="success"

        >

          Button outlined success
        </Button>
        <Button
            outlined
            variant="danger"

        >

          Button outlined danger
        </Button>
        <Button
            outlined
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
        <Button class="mr-2" ghost>
          Button outlined success
        </Button>
        <Button ghost variant="primary">
          Button outlined primary
        </Button>
        <Button ghost
                variant="success">
          Button outlined success
        </Button>

        <Button ghost
                variant="danger">
          Button outlined danger
        </Button>
        <Button ghost
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
                link
                variant="primary">
          button primary
        </Button>

      </div>


    </div>
    <!-- Rounded -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Rounded</h2>

      <div class="flex items-center  justify-start">

        <Button class="ml-2"
                rounded

        >
          button rounded default
        </Button>

        <Button class="ml-2"
                :rounded="true"
                variant="primary"
        >
          button rounded primary
        </Button>
        <Button class="ml-2"
                :rounded="true"
                variant="warning"
        >
          button rounded warning
        </Button>
        <Button class="ml-2"
                :rounded="true"
                variant="danger"
        >
          button rounded danger
        </Button>
        <Button class="ml-2"
                :rounded="true"
                variant="gray"
        >
          button rounded gray
        </Button>
        <Button class="ml-2"
                :rounded="true"
                variant="success"
        >
          button rounded success
        </Button>

      </div>


    </div>
    <!-- Block -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Block</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                block
                variant="primary"
        >
          button Block
        </Button>

      </div>


    </div>


    <!-- loading -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">loading</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2" loading  >
          button loading
        </Button>

        <Button class="ml-2" loading variant="primary"   >
          button loading
          <span>
            icon
          </span>
        </Button>


      </div>

    </div>
    <!-- Disabled -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Disable</h2>

      <div class="flex items-center  justify-start">
        <Button class="ml-2"
                disabled
                variant="primary"
        >
          <label>Solid</label>

        </Button>
        <Button class="ml-2"
                outlined
                variant="gray"
                disabled
        >
          outline
        </Button>
        <Button class="ml-2"
                ghost

                disabled
        >
          ghost

        </Button>
        <Button
            class="ml-2"
            ghost
            disabled>
          floading
        </Button>
        <Button class="ml-2"
                outlined
                variant="gray"
                disabled>
          While

        </Button>

      </div>
    </div>
    <!-- Button Icons -->
    <div class="p-10   border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Button Icons</h2>
      <div class="flex items-center  justify-start">

        <Button
            class="ml-2"
            :icon="true"
        >
          <Icon name="thumbsUp" size="20"/>
        </Button>


        <Button class="ml-2"
                :icon="true"
                :outlined="true"
        >
          <Icon name="thumbsUp" size="20"/>
        </Button>

        <Button class="ml-2"
                :icon="true"
                variant="primary"
        >
          <Icon name="thumbsUp" size="20"/>
        </Button>

      </div>
    </div>
  </div>
</template>
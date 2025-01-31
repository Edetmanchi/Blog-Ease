<template>
    <NuxtLink
      :to="to"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-3 w-full py-3 text-center inline-block items-center"
    >
      <slot />
    </NuxtLink>
  </template>
  
  <script setup>
  defineProps({
    to: {
      type: String,
      required: false,
      default: "#",
    },
    type: {
      type: String,
      required: false,
      default: "#",
    },
  });
  </script>
  

<template>
   
    <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class=" text-6xl font-semibold text-indigo-600">{{error.statusCode}}</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{{ error.message }}</h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <nuxt-link to="/" class="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</nuxt-link>
          <nuxt-link to="" @click="handleClearError" class=" border-slate-500 border py-3  px-6 text-sm font-semibold text-gray-900">Clear Erroe <span aria-hxidden="true">&rarr;</span></nuxt-link>
        </div>
      </div>
    </div>
  </template>


<script setup>
    defineProps([
        'error'
    ])
    const handleClearError =()=> {
        clearError( {redirect: '/',
            // fatal attribut to force all page/route to respond to errors
            fatal: true
        })
    }

</script>

<style scoped>

</style>
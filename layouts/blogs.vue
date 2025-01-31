<template>
    <div>
        <header class="flex flex-row shadow-sm bg-white">
            <div class="mx-auto max-w-4xl lg:mx-2">
                <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blogs</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <PrimaryButton to="/blogs/addpost/">Add post</PrimaryButton>
        </header>
        <div class="container mx-auto p-4">
            <slot/>
    
        </div>

        <Footer />
    </div>
  </template>
  
  <script setup>

  
  </script>
  
  <style scoped>
   .router-link-exact-active {
      color: #12b488;
    }
  
  </style>

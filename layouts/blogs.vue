<template>
    <div>
        <header class="flex flex-row shadow-sm bg-white">
            <Nav :showLogo="true" :showNavLinks="false" :showProfileDropdown="true" :showGetStarted="false" :showAddPost="true" />
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

<template>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Mobile menu button -->
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-inset">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
  
          <!-- Logo -->
          <div class="flex  justify-between items-center sm:items-stretch sm:justify-between ">
            <div class="flex  items-center">
                <i class="material-icons pr-1 items-center w-auto text-white">
                    library_books
                </i>
                <span class="font-extrabold text-white">Blog Ease</span>
            </div>
            <!-- Desktop Navigation -->
            <div class="hidden sm:ml-6 sm:block flex-end">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" 
                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
  
          <!-- Right Side: Notifications & Profile -->
          <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2">
              <i class="material-icons w-10 font-bold h6">add</i>
            </button>
  
            <div class="relative ml-3">
              <button @click="profileMenuOpen = !profileMenuOpen" class="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
  
              <div v-if="profileMenuOpen" class="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md py-1">
                <nuxt-link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</nuxt-link>
                <nuxt-link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</nuxt-link>
                <nuxt-link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</nuxt-link>
              </div>
            </div>
          </div> -->
        </div>
      </div>
  
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mobileMenuOpen = ref(false)
  const profileMenuOpen = ref(false)
  
  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Servicces', href: '#', current: false },
  ]

  defineProps([
    'nav'
  ])
  </script>
  
<template>
  <div class="relative px-4 lg:px-8">
    <div class="mx-auto max-w-4xl sm:py-40">
      <!-- Announcement Banner -->
      <div class="mb-8 flex justify-center">
        <div class="rounded-full px-4 py-2 text-base text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          New feature: Collaborative blogging! <nuxt-link to="blogs" class="font-semibold text-indigo-600">Learn more →</nuxt-link>
        </div>
      </div>

      <!-- Main Content -->
      <div class="text-center">
        <h1 class="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl">
          Write, Share, and Grow Your Audience
        </h1>
        <p class="mt-6 text-2xl text-gray-700 sm:text-2xl">
          Join a community of passionate writers. Publish your stories, connect with readers, and grow your audience effortlessly.
        </p>
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <nuxt-link
            to="/auth/signin"
            class="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start Writing Now
          </nuxt-link>
          <nuxt-link
            to="/auth/signin"
            class="text-lg font-semibold text-gray-900 hover:text-indigo-600"
          >
            Explore Features →
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Background Blob -->
    <div
      class="absolute inset-x-0 top-[calc(100%-3rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#41031d] to-[#0a0553] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(["hero"]);
</script>

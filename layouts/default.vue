<template>
    <div>
        <header class=" flex flex-row shadow-sm bg-white">
            <Nav :showLogo="true" :showNavLinks="true" :showProfileDropdown="false" :showGetStarted="true" :showAddPost="false"  />
        </header>
    
        <div class="container mx-auto p-4">
            <slot/>
        </div>
        

    </div>
</template>

<script setup>
    definePageMeta({
        layout: "nav",
    })

</script>

<style  scoped>

</style>
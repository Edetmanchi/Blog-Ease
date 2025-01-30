<template>
    <div>
        <header>
            <Nav :nav="nav"/>
        </header>
        <div>
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
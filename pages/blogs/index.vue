<template>
    <div>
        <div class="text-center text-3xl" v-if="!blogs">Loading .......</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
    
            <div v-for="b in blogs" :key="b.id">
                <BlogCard :blog='b'/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'blogs'
    })

    // fetching data
    const {data: blogs, error} = await useFetch('http://localhost:8000/blogs')
    
    if(error.value){
        console.log(error.value)
    }
</script>

<style scoped>

</style>

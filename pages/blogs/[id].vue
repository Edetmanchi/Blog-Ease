<template>
    <div>
        <!-- meta data to override universal meta data for this route -->
         <Head>
            <Title>Blog Ease | {{ blog.name }}</Title>
            <Meta name='description' :content="blog.description" />
         </Head>
         
        <BlogDetails  :blog="blog"/>
        
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "blogs",
    })
    const { id } = useRoute().params

        // fetching singular data
    const uri = 'http://localhost:8000/blogs/' + id

    const {data: blog} = await useFetch(uri, {key:id})
    if(!blog.value){
        throw createError({statusCode: 404, statusMessage: 'Page not found'})
    }
    
</script>


<style scoped>

</style>
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
        middleware: ['auth']
    })


    const { id } = useRoute().params;

        // Fetch the blog post from the JSON Server
        const uri = `http://localhost:8000/blogs/${id}`;
        const { data: blog, error } = await useFetch(uri);

        // Handle 404 error if the blog post is not found
        if (!blog.value || error.value) {
        throw createError({ statusCode: 404, statusMessage: 'Blog post not found' });
        }


    
</script>

<template>
    <div>
        <div class="">
            
            <div class="bg-white shadow-lg max-w-[450px] items-center justify-around border border-gray-200 hover:drop-shadow-xl rounded-lg mb-5">
                <nuxt-link to="">
                    <img class="rounded-sm " :src="blog.image" :alt="blog.title">
                </nuxt-link>
                <div class="p-5 ">
                    <div class="flex flex-row gap-2">
                        <span class="text-slate-900">{{ blog.date }}</span>
                        <span class="category">{{ blog.category }}</span>
                    </div>
                    <h5 class="text-gray-900 font-bold text-3xl mb-2">{{ blog.description }}</h5>
                    <p class="font-normal text-gray-700 mb-3">{{ truncateBody(blog.body, 20) }}.</p>
                    <PrimaryButton :to="`/blogs/${blog.id}`">Read More</PrimaryButton>

        
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue';

    const { blog } = defineProps([
        'blog'
    ])

    const truncateBody = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '......';
        }
        return text;
    };

</script>

<style scoped>

</style>
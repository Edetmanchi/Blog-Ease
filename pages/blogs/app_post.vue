<template>
    <div>
      <h1>Add a New Post</h1>
      <form @submit.prevent="addPost">
        <InputField v-model="title" placeholder="Title" />
        <InputField v-model="body" placeholder="Body" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  </template>
  
  <script setup>
  const title = ref('');
  const body = ref('');
  
  const addPost = async () => {
    await $fetch('http://localhost:3001/blogs', {
      method: 'POST',
      body: JSON.stringify({
        id: Date.now(), 
        name: "Author Name",
        date: new Date().toISOString().split('T')[0], 
        description: title.value,
        body: body.value,
        category: "General",
        image: "/images/default.jpg"
      }),
    });
    navigateTo('/blogs');
  };
  </script>
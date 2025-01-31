<!-- <template>
    <div class="my-8">
      <form @submit.prevent="addPost">
        <div class="max-w-3xl  item-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <span class="material-icons items-center justify-center w-20 h-10 text-white dark:text-gray-400 mb-3">
              contract_edit
            </span>
            <div>
                <h5 class="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Let's get your ideas Published</h5>
            </div>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Kindly fill out this form to start a blog</p>
            <div class="my-2">

              <div>
                  <label for="text" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                  <label for="text" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Blog Title</label>
                  <input type="title" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                  <label for="text" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Category</label>
                  <input type="category" name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                  <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Message</label>
                  <textarea id="message" rows="6"  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
              </div>


                <div class="flex items-center justify-center w-full mt-6">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
            </div>


            <SecondaryButton type="submit">Submit</SecondaryButton>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  const title = ref('');
  const body = ref('');
  
  const addPost = async () => {
    await $fetch('http://localhost:8000/blogs', {
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
  </script> -->







  <template>
    <div class="mt-20">
      <form @submit.prevent="addPost">
        <div class="max-w-3xl my-15 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 class="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Let's get your ideas Published</h5>
          </div>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Kindly fill out this form to start a blog</p>
          <div class="my-2">
            <!-- Name Input -->
            <div>
              <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Name</label>
              <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
            </div>
            <!-- Title Input -->
            <div class="mt-4">
              <label for="title" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Blog Title</label>
              <input v-model="title" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter blog title" required />
            </div>
            <!-- Category Input -->
            <div class="mt-4">
              <label for="category" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Category</label>
              <input v-model="category" type="text" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-15 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter blog category" required />
            </div>
            <!-- Body Input -->
            <div class="mt-4">
              <label for="body" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Blog Content</label>
              <textarea v-model="body" id="body" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your blog content here..." required></textarea>
            </div>
            <!-- Image Upload -->
            <div class="flex items-center justify-center w-full mt-6">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleImageUpload" />
              </label>
            </div>
          </div>
          <!-- Submit Button -->
          <button type="submit" class=" w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
        layout: 'blogs',
        middleware: ['auth']
    })



  const name = ref('');
  const title = ref('');
  const category = ref('');
  const body = ref('');
  const image = ref('');
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      image.value = URL.createObjectURL(file); 
    }
  };

  const { data: existingBlogs } = await useFetch('http://localhost:8000/blogs');
  const nextId = existingBlogs.value.length + 1;
  
  const addPost = async () => {
    const newPost = {
      id: nextId, // Generate a unique ID
      name: name.value,
      date: new Date().toISOString().split('T')[0], // Current date
      description: title.value,
      body: body.value,
      category: category.value,
      image: image.value || '/images/default.jpg', // Default image if none is uploaded
    };
  
    await $fetch('http://localhost:8000/blogs', {
      method: 'POST',
      body: JSON.stringify(newPost),
    });

  
    navigateTo('/blogs'); 
  };
  </script>
  

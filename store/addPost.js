export const state = () => ({
    user: null,
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  };

// import { defineStore } from "pinia";
// export const useAddPostStore = defineStore('useAddPost', {
//   state: ()=>{(
//     addPost: [],
// )}
// })

a
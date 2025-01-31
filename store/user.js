export const useUserStore = defineStore('user', {
  state: () => ({
    user: null, 
  }),
  actions: {
    // Set user data after successful login
    setUser(userData) {
      this.user = userData;
    },
    
    // Clear user data on logout
    clearUser() {
      this.user = null;
    },
  },
  getters: {
    // Check if the user is authenticated
    isAuthenticated: (state) => !!state.user,
  },
});
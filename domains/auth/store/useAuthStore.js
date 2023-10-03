export const useAuthStore = () => {
  const state = ref({
    user: null,
  });

  function registerUser(user) {
    console.log("registerUser", user);
  }

  function tryLogin(user) {
    console.log("tryLogin", user);
  }

  function resetPassword(user) {
    console.log("resetPassword", user);
  }

  return { state, tryLogin, registerUser, resetPassword };
};

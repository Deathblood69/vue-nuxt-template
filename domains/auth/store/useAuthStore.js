import { getTokenAuthService } from "~/domains/auth/services/getTokenAuthService.js";
import { registerUserAuthService } from "~/domains/auth/services/registerUserAuthService.js";
import { resetPasswordAuthService } from "~/domains/auth/services/resetPasswordAuthService.js";

export const useAuthStore = () => {
  const state = ref({
    user: null,
  });

  function registerUser(user) {
    try {
      return registerUserAuthService(user);
    } catch (e) {
      throw new Error(e);
    }
  }

  function tryLogin(user) {
    try {
      return getTokenAuthService(user);
    } catch (e) {
      throw new Error(e);
    }
  }

  function resetPassword(user) {
    try {
      return resetPasswordAuthService(user);
    } catch (e) {
      throw new Error(e);
    }
  }

  function setUser(user) {
    if (user.token) {
      state.value = user;
    }
  }

  return { state, tryLogin, registerUser, resetPassword, setUser };
};

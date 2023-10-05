import { fetchService } from "~/services/fetchService.js";

export async function resetPasswordAuthService(user) {
  return fetchService("/auth/reset-password", "POST", {
    user,
  });
}

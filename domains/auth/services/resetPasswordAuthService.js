import { fetchService } from "~/services/fetchService.js";

export async function resetPasswordAuthService(user) {
  return fetchService("reset-password", "POST", {
    user,
  });
}

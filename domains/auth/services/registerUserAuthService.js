import { fetchService } from "~/services/fetchService.js";

export async function registerUserAuthService(user) {
  return fetchService("/api/users", "POST", {
    user,
  });
}

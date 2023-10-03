import { fetchService } from "~/services/fetchService.js";

export async function getTokenAuthService(user) {
  return fetchService("/token", "POST", {
    user,
  });
}

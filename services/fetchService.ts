import { MethodeHTTP } from "~/models/enumerations/MethodeHTTP";

export async function fetchService(
  url: string,
  methode: MethodeHTTP,
  data: Object,
) {
  const fetch = await useFetch(url, {
    baseURL: "http://localhost:8080",
    method: methode,
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (fetch.status.value === "error") {
    throw new Error("La requête à échouée");
  }

  return fetch;
}

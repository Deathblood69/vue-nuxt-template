export async function fetchService(url, methode, data) {
  return useFetch(url, {
    baseURL: "http://localhost:8080",
    method: methode,
    body: data,
    headers: {
      "Content-Type": "application/json",

    },
  });
}

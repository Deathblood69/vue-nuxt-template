export async function fetchService(url, methode, data) {
  const { data: res } = useFetch(url, {
    method: methode,
    body: data,
    baseURL: "http://localhost:8000",
  });
  console.log(res);
  return undefined;
}

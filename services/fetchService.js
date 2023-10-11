export async function fetchService(url, methode, data) {
  const {data: res} = useFetch(url, {
    method: methode,
    body: data,
    baseURL: "http://localhost:8080",
    mode: 'no-cors',
  });

  console.log(res);
  return undefined;
}

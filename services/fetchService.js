export async function fetchService(url, methode, data) {
  const response = await fetch(url, {
    method: methode,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return await response.json();
}


// const fetchJson = fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
// fetchJson.then(response => response.json()).then(data => console.log('fetch data:', data));

async function test() {
  const fetchJson = fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
  const result = await fetchJson;
  const data = await result.json();
  console.log('fetch data:', data);
}

test();

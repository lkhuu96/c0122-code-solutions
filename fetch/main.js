
const fetchJson = fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });

fetchJson.then(response => response.json()).then(data => console.log('fetch data:', data));

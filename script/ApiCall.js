export async function fetchData() {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  const photoPromise = fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());

  const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  return Promise.all([postPromise, photoPromise, userPromise]);
}

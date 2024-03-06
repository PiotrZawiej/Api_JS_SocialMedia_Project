export async function fetchPosts() {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return postPromise;
}

export async function fetchPhotos() {
  const photoPromise = fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());

  return photoPromise;
}

export async function fetchUsers() {
  const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return userPromise;
}

export async function fetchCommets() {
  const commentsPromise = fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((response) => response.json());
  return commentsPromise;
}

export async function fetchData() {
  return Promise.all([
    fetchPosts(),
    fetchPhotos(),
    fetchUsers(),
    fetchCommets(),
  ]);
}

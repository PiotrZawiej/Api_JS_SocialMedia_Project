//fetch posts
export async function fetchPosts() {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return postPromise;
}

//fetch photos
export async function fetchPhotos() {
  const photoPromise = fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());

  return photoPromise;
}

//fetch Users
export async function fetchUsers() {
  const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return userPromise;
}

//fetch Comments
export async function fetchCommets() {
  const commentsPromise = fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((response) => response.json());
  return commentsPromise;
}

//call all functions
export async function fetchData() {
  return Promise.all([
    fetchPosts(),
    fetchPhotos(),
    fetchUsers(),
    fetchCommets(),
  ]);
}

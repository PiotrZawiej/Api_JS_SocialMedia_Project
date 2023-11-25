let usersID = [];

// Fetch post data
const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    document.querySelector(".post-title").textContent = posts.title;
    document.querySelector(".post-body").textContent = posts.body;
    usersID.push(posts.userId);
  });

// Fetch photo data
const photoPromise = fetch("https://jsonplaceholder.typicode.com/photos/1")
  .then((response) => {
    return response.json();
  })
  .then((photos) => {
    const photoEl = document.querySelector(".photo");
    photoEl.src = photos.thumbnailUrl;
    photoEl.alt = photos.title;
  });

const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const userEl = document.querySelector(".user-name");
    if (usersID[0] == users.id) {
      userEl.textContent = users.username;
    }
  });

// Wait for both promises to resolve
Promise.all([postPromise, photoPromise]).then(() => {
  // Now usersID has the data from both fetch requests
  console.log(usersID);
});

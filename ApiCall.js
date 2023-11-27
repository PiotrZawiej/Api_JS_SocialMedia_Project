const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => response.json()
);
const photoPromise = fetch("https://jsonplaceholder.typicode.com/photos").then(
  (response) => response.json()
);

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

Promise.all([postPromise, photoPromise, userPromise]).then(
  ([posts, photos, users]) => {
    for (let i = 0; i < posts.length; i++) {
      userID = 0;
      let post = posts[i];
      let photo = photos[i];
      let userIndex = i % users.length;
      console.log(userIndex);

      let postContainerEl = document.createElement("div");
      postContainerEl.className = "post-conatainer";

      let userPhotoEl = document.createElement("div");
      userPhotoEl.className = "photo-user";

      let postPhoto = document.createElement("img");
      postPhoto.className = "photo";
      postPhoto.src = photo.thumbnailUrl;
      postPhoto.alt = photo.title;

      let userNameEl = document.createElement("div");
      userNameEl.className = "user-name";
      userNameEl.textContent = users[userIndex].username;

      userPhotoEl.appendChild(postPhoto);
      userPhotoEl.appendChild(userNameEl);

      let titleBodyEl = document.createElement("div");

      let postTitle = document.createElement("div");
      postTitle.className = "post-title";
      postTitle.textContent = post.title;

      let postBody = document.createElement("div");
      postBody.className = "post-body";
      postBody.textContent = post.body;

      titleBodyEl.appendChild(postTitle);
      titleBodyEl.appendChild(postBody);

      postContainerEl.appendChild(userPhotoEl);
      postContainerEl.appendChild(titleBodyEl);

      document.body.appendChild(postContainerEl);
    }
  }
);

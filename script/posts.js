import { fetchData } from "./ApiCall.js";

fetchData().then(([posts, photos, users]) => {
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[randomIndex];
    let photo = photos[randomIndex];
    let userIndex = posts[randomIndex].userId % users.length;

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
});

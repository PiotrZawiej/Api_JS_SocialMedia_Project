import { fetchData } from "./ApiCall.js";

const targetIpAddress = "desired.ip.address";

fetchData().then(([posts, photos, users, comments]) => {
  for (let i = 0; i < 10; i++) {
    // const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[i];
    let photo = photos[i];
    let userIndex = posts[i].userId;
    let commentIndex = posts[i].id;
    
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
    userNameEl.textContent = users[userIndex - 1].username;

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

    let feedback = document.createElement("div");
    feedback.className = "feedback-constainer";

    let commentsLink = document.createElement("div");
    commentsLink.className = "comments-link";
    commentsLink.textContent = "comments";

    feedback.appendChild(commentsLink);
    
    let j = 0

    let commentsContainer = document.createElement("div");
    commentsContainer.className = "commments-container";

    while (j < comments.length && comments[j].postId !== posts[i].id) {
      j += 1;
    }
    
    if (j < comments.length) {
      commentsContainer.textContent = comments[j].body;
    }

    
    
    postContainerEl.appendChild(userPhotoEl);
    postContainerEl.appendChild(titleBodyEl);
    postContainerEl.appendChild(feedback);
    postContainerEl.appendChild(commentsContainer);

    document.body.appendChild(postContainerEl);
  }
});

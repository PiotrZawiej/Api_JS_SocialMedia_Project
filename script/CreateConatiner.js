export function createAvatarElement(photo, user) {
  let userPhotoEl = document.createElement("div");
  userPhotoEl.className = "photo-user";

  let postPhoto = document.createElement("img");
  postPhoto.className = "photo";
  postPhoto.src = photo.thumbnailUrl;
  postPhoto.alt = photo.title;

  let userNameEl = document.createElement("div");
  userNameEl.className = "user-name";
  userNameEl.textContent = user.username;

  userPhotoEl.appendChild(postPhoto);
  userPhotoEl.appendChild(userNameEl);

  return userPhotoEl;
}

export function createTitleBodyElement(post) {
  let titleBodyEl = document.createElement("div");

  let postTitle = document.createElement("div");
  postTitle.className = "post-title";
  postTitle.textContent = post.title;

  let postBody = document.createElement("div");
  postBody.className = "post-body";
  postBody.textContent = post.body;

  titleBodyEl.appendChild(postTitle);
  titleBodyEl.appendChild(postBody);

  return titleBodyEl;
}

export function createFeedbackElement() {
  let feedback = document.createElement("div");
  feedback.className = "feedback-constainer";

  let commentsLink = document.createElement("div");
  commentsLink.className = "comments-link";
  commentsLink.textContent = "comments";

  feedback.appendChild(commentsLink);

  return feedback;
}

export function createCommentsContainer() {
  let commentsContainer = document.createElement("div");
  commentsContainer.className = "commments-container";

  return commentsContainer;
}

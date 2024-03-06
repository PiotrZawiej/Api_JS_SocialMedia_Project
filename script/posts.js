//posts.js

import { fetchData } from "./ApiCall.js";
import { createCommentsContainer } from "./CreateConatiner.js";
import { createAvatarElement } from "./CreateConatiner.js";
import { createTitleBodyElement } from "./CreateConatiner.js";
import { createFeedbackElement } from "./CreateConatiner.js";

//finding Comment with post id
const findComment = function (comments, post) {
  let commentContent = "";
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].postId === post.id) {
      commentContent = comments[i].body;
      break;
    }
  }
  return commentContent;
};

//main apendchild
fetchData().then(([posts, photos, users, comments]) => {
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[randomIndex];
    let photo = photos[randomIndex]; // Fixed this line
    let user = users[post.userId - 1]; // Fixed this line

    let postContainerEl = document.createElement("div");
    postContainerEl.className = "post-conatainer";

    postContainerEl.appendChild(createAvatarElement(photo, user)); // Fixed this line
    postContainerEl.appendChild(createTitleBodyElement(post));
    postContainerEl.appendChild(createFeedbackElement());
    postContainerEl.appendChild(
      createCommentsContainer(findComment(comments, post))
    ); // Fixed this line

    document.body.appendChild(postContainerEl);
  }
});

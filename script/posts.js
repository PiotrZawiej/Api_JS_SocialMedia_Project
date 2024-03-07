//posts.js

import { fetchData } from "./ApiCall.js";
import { createCommentsContainer } from "./CreateConatiner.js";
import { createAvatarElement } from "./CreateConatiner.js";
import { createTitleBodyElement } from "./CreateConatiner.js";
import { createFeedbackElement } from "./CreateConatiner.js";
import { findComment } from "./finding.js";

//main apendchild
fetchData().then(([posts, photos, users, comments]) => {
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[randomIndex];
    let photo = photos[randomIndex];
    let user = users[post.userId - 1];

    let postContainerEl = document.createElement("div");
    postContainerEl.className = "post-conatainer";

    console.log(findComment(comments, post));

    postContainerEl.appendChild(createAvatarElement(photo, user));
    postContainerEl.appendChild(createTitleBodyElement(post));
    postContainerEl.appendChild(createFeedbackElement());

    for (let i = 0; i < findComment(comments, post)[0].length; i++) {
      postContainerEl.appendChild(
        createCommentsContainer(
          findComment(comments, post)[1][i], //ading post body
          findComment(comments, post)[0][i] // adding mail info
        )
      );
    }

    document.body.appendChild(postContainerEl);
  }
});

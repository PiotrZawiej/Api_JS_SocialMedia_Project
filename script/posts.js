//posts.js

import { fetchData } from "./ApiCall.js";
import { createCommentsContainer } from "./CreateConatiner.js";
import { createAvatarElement } from "./CreateConatiner.js";
import { createTitleBodyElement } from "./CreateConatiner.js";
import { createFeedbackElement } from "./CreateConatiner.js";


fetchData().then(([posts, photos, users, comments]) => {
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[randomIndex];
    let photo = photos[randomIndex]; // Fixed this line
    let user = users[post.userId - 1]; // Fixed this line
    let commentIndex = post.id;

    //AAAAAAAAAAAA
    //yes
    


    let commentsContainer = createCommentsContainer(); // Moved this line here

    while (commentIndex === comments.postId) {
      if (commentIndex === comments.postId) {
        commentsContainer.textContent = comments[commentIndex - 1].body;
      } else {
        commentIndex += 1;
      }
    }

    postContainerEl.appendChild(createAvatarElement(photo, user)); // Fixed this line
    postContainerEl.appendChild(createTitleBodyElement(post));
    postContainerEl.appendChild(createFeedbackElement());
    postContainerEl.appendChild(commentsContainer); // Fixed this line

    document.body.appendChild(postContainerEl);

    async function showComends(Container){
      while ((j < comments.length && comments[j].postId-1 !== posts[i].id)) {

        
        let commentContainer = document.createElement("div");
        commentContainer.className = "commment-container";
  
        let commentsMail = document.createElement("div");
        commentsMail.className = "comments-email";
        commentsMail.textContent = comments[j].email;
      
        let commentsBody = document.createElement("div");
        commentsBody.className = "comment-body";
        commentsBody.textContent = comments[j].body;
        //yessdadasd
      
        
        commentContainer.appendChild(commentsMail);
        commentContainer.appendChild(commentsBody);
        Container.appendChild(commentContainer);
        
        j += 1;
      }
      Container.classList.toggle("show-all-comments")
    }
  }
};

import { fetchData } from "./ApiCall.js";

let j = 0;
fetchData().then(([posts, photos, users, comments]) => {
  for (let i = 0; i < 10; i++) {
    // const randomIndex = Math.floor(Math.random() * posts.length);

    let post = posts[i];
    let photo = photos[i];
    let userIndex = posts[i].userId;
    //AAAAAAAAAAAA
    
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

    let commentsContainer = document.createElement("div");
    commentsContainer.className = "commments-container";

    commentsLink.addEventListener("click", () => {
      showComends(commentsContainer);
    })

    feedback.appendChild(commentsLink);
    
    
    postContainerEl.appendChild(userPhotoEl);
    postContainerEl.appendChild(titleBodyEl);
    postContainerEl.appendChild(feedback);
    postContainerEl.appendChild(commentsContainer);

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
      
        
        commentContainer.appendChild(commentsMail);
        commentContainer.appendChild(commentsBody);
        Container.appendChild(commentContainer);
        
        j += 1;
      }
      Container.classList.toggle("show-all-comments")
    }
  }
});

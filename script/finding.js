//finding Comment with post id
export const findComment = function (comments, post) {
  let commentContent = [];
  let mail = [];
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].postId === post.id) {
      mail.push(comments[i].email);
      commentContent.push(comments[i].body);
    }
  }
  let commentAndMailContent = [];
  commentAndMailContent.push(mail);
  commentAndMailContent.push(commentContent);
  return commentAndMailContent;
};

async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

async function deleteCommentHandler(commentID) {
  //event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/comments/${commentID}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert(response.statusText);
  }
}

//document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);

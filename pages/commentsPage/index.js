import { useState } from "react";

function CommentPage() {
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const fetchComment = async () => {
    const response = await fetch(`/api/commentsApi`);
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch(`/api/commentsApi`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/commentsApi/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    fetchComment();
  };

  // const updateComment = async () => {
  //   const response = await fetch(`/api/commentsApi/`);
  //   const data = await response.json();
  //   console.log(data);
  //   const data1 = JSON.stringify(data);
  //   setUpdateComment(data1);
  // };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}> Submit Comment ! </button>
      <button onClick={fetchComment}> Load-Comment </button>
      {/* <input
        type="text"
        value={updatecomment}
        onChange={(e) => setUpdateComment(e.target.value)}
      /> */}
      {comments.map((comment) => {
        return (
          <>
            <div key={comment.id}>
              <p>
                {comment.id} {comment.text}
              </p>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CommentPage;

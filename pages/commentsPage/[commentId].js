import { comments } from "data/dataComments";

function Comment({ comment }) {
  return (
    <div>
      {comment.id}
      {comment.text}
    </div>
  );
}

export default Comment;

async function getStaticPath(context) {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}

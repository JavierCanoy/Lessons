import { comments } from "../../../data/dataComments";
export default function Handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comm = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comm,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}

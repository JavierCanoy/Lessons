export default function Handler(req, res) {
  const paramsRcv = req.query.params;
  console.log(paramsRcv);

  res.status(200).json(paramsRcv + " gwapoko! ");
}

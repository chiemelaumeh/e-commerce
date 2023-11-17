import express from "express"
const app = express();

const port = process.env.PORT || 8800;



app.use("/", (req, res) => {
  res.status(200).send("Api is working")
})

app.listen(port, () => {
  console.log(`...Listening on port ${port}`)
})
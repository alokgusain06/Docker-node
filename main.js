const express = require('express')
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({message: "hey, i am nodejs in container"});
});

app.listen(PORT, () => console.log(`server started on PORT:${port}`));
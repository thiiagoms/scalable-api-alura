const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (_, response) => {
  response.status(201).json({ message: "Hello World" });
});

app.listen(8000, () => console.log(`Listening on http://localhost:${PORT}`));

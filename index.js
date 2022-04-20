const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen("8000", () => {
	console.log("server listening on port 8000");
});

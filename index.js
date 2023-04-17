const express = require("express");
const jsend = require("jsend");

const app = express();

app.use(jsend.middleware);

app.all("/", (req, res) => {
	res.jsend.success({ message: "Hei Håkon du e kul" });
});

app.listen(process.env.PORT || 3000);

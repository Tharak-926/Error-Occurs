const express = require("express");
const add = express();
add.get("/",(request,response) =>{
	response.send("Hello World!")
});
add.listen(3000);

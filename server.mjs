import express from "express";

//TODO learn how this app object works and finish the scaffold


const PORT = system.env.PORT || 8080;
//The server is listening to the port.
//  A port is an adress or entrance. 8080, FTP is 21. File transfer protocol. 8080 is a port for http. It's a convention.
const app = new express();
//HTTP verb for fetching information

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log("listening on port ", PORT)
})

//index.html is where the requests get sent from.

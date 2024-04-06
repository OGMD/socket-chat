const io = require("socket.io")({
    cors:{
        origin:'*'
    }
});

io.on("connection", client => {
    client.on("ask", async (data) => {
        client.emit("response", {
            "msg":"Hello"
        })
    })
})

io.listen(8000)
const express = require("express")
const cors = require("cors");

const app = express();

app.set('trust proxy', 1)

app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true
}));

app.use(express.json())

app.get("/api/products", async (req, res) => {
    res.json({message:"success"})
})


app.listen(5000, () => {
    console.log("listening on port: 5000");
})
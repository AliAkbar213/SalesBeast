const express = require("express")
const cors = require("cors");
const productRoute = require("./routes/products/productsRoute");

const app = express();

app.set('trust proxy', 1)

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://salebeast.netlify.app"
    ],
    credentials: true
}));

app.use(express.json())

app.use('/api/products', productRoute)

app.get("/api/products", async (req, res) => {
    res.json({message:"success"})
})


app.listen(5000, () => {
    console.log("listening on port: 5000");
})
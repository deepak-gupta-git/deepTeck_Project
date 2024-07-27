require("dotenv").config();
const express = require("express");
const app = express();
const router = require("../server/Routers/auth-router");
const connectDb = require("./Utils/utils");
const errorMiddleware = require("../server/middleware/error.middleware")
const contactRouter = require("../server/Routers/contact-router")
const cors = require("cors") 

const PORT = process.env.PORT;


const corsOptions = {
    origin:"http://localhost:5173" ,
    methods:"GET, POST, PUT , PATCH , DELETE,HEAD",
    Credential:true
};

app.use(cors(corsOptions));
app.use(express.json());



app.get("/", (req, res) => {
    res.status(200).send("Hello From Root")
});

app.use("/api/auth", router);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("App is listening on port", PORT);
    })
})
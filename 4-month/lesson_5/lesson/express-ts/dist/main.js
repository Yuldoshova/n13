import bodyParser from "body-parser";
import express from "express";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log("okk");
    res.send("server is running");
});
app.listen(3000, 'localhost', () => console.log('Server starting on port 3000'));

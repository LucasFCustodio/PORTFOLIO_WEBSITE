import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/personal-projects", (req, res) => {
    res.render("personal.ejs", {
        pageCss: "/styles/personal-professional.css"
    });
});

app.get("/professional-projects", (req, res) => {
    res.render("professional.ejs", {
        pageCss: "/styles/personal-professional.css"
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs" , {
        pageCss: "/styles/about.css"
    });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        pageCss: "/styles/about-contact.css"
    });
});

app.post("/submit", (req, res) => {
    const name = req.body.fname + " " + req.body.lname;
    const email = req.body.email;
    const company = req.body.company;
    const message = req.body.message;
    res.render("submit.ejs", {
        name: name,
        email: email,
        company: company,
        message: message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
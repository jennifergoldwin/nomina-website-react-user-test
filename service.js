const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const postmark = require("postmark");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
const port = process.env.PORT || 5000;
// app.use("/public", express.static(path.join(__dirname, "public")));

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  requireTLS: true,
  auth: {
    user: "jennifergoldwinn25@gmail.com",
    pass: process.env.API_KEY || "uxtnpowrblraonzn",
  },
});

app.post("/send", async (req, res) => {
  var emailOptions = {
    from: req.body.email,
    to: "contact@creoengine.com",
    replyTo: req.body.email,
    subject: "Nomina || Message From " + req.body.email,
    html: req.body.message,
  };
  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      res.json("failed");
    } else {
      res.json("success");
    }
  });
});

app.listen(port, () => console.info(`Listening on port ${port}`));

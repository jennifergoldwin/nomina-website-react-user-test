import React, { useState } from "react";
import "../css/ContactUs.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [status, setStatus] = useState("Send");
  const [response, setResponse] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { email, message } = e.target.elements;
    console.log(message.value);
    let details = {
      email: email.value,
      message: message.value,
    };
    // emailjs.send('service_7ci2knu','template_2wfehm9',details,'G4AetaCMjy7UzzsSu')
    emailjs
      .send("service_d2u4thw", "template_kfxtu2c", details, "qBy9YobgcYsGoCaPF")
      .then(
        (response) => {
          document.getElementById("contact-us-form").reset();
          setStatus("Send");
          setResponse("Success");
          console.log("SUCCESS", response);
        },
        (error) => {
          setResponse("Failed");
          console.log("FAILED", error);
        }
      );

    emailjs.send(
      "service_d2u4thw",
      "template_kfxtu2c",
      details,
      "qBy9YobgcYsGoCaPF"
    );
  };

  const renderAlert = () => {
    if (response === "Success") {
      return (
        <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
          <strong class="mx-2">Success!</strong> Your message has been sent
          successfully.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={(e) => {
              setResponse("");
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } else if (response === "Failed") {
      return (
        <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
          <strong class="mx-2">Error!</strong> A problem has been occurred while
          submitting your data.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={(e) => {
              setResponse("");
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container"
      >
        <div className="wrap-title-desc-container">
          <h2>CONTACT US!</h2>
          <span>Get in touch! Don’t be Shy!</span>

          <p>
            Whether it’s for business solutions, applications, or even a simple
            greeting, we’re always happy to see new faces!
          </p>
        </div>

        {response && renderAlert()}

        <form onSubmit={sendEmail} id="contact-us-form">
          <div className="wrap-contact-us-container">
            <input
              type="email"
              id="email"
              className="field-style"
              placeholder="Your Email"
              required
            ></input>
            <textarea
              id="message"
              className="field-style"
              placeholder="Type a message..."
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-send">
            <span>{status}</span>
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;

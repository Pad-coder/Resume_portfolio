import React from "react";
import "./CSS/Contact.css";
function Contact() {
  return (
    <>
      <section className="Contact_container">
        <div className="Contact">
          <h2>Let's Connect</h2>
          <h2>Get in touch with me</h2>
          <p>
            <p>
              I'm always excited to connect with fellow developers,
              professionals, and enthusiasts. You can find me on the following
              platforms:
            </p>
          </p>
          <ul>
            <li>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/padmanaban2002" target="_blank"> linkedin.com/in/padmanaban2002
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>
              <a href="https://github.com/Pad-coder" target="_blank"> github.com
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>
              <a href="https://twitter.com/pad_coder" target="_blank"> twitter.com
              </a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:padmanaban870@gmail.com"> Padmanaban870@gmail.com</a>
            </li>
          </ul>
          <p>
            Feel free to reach out to me for collaboration opportunities,
            networking, or just to share ideas and insights. I look forward to
            connecting with you!
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;

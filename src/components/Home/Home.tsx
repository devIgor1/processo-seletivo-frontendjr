import { useState } from "react";
import "./Home.scss";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import Roll from "react-reveal/Roll";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warn("Fill in all fields", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else
      emailjs
        .send(
          "service_e0kf46m",
          "template_t5yjv8y",
          templateParams,
          "JnFUIP0QJVzPCxtDH"
        )
        .then(
          res => {
            console.log("Email sent successfully", res.status, res.text);
          },
          error => {
            console.log(error.text);
          }
        );

    toast.success("Thank you for contacting us", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Fade duration={2000}>
      <div className="container">
        <nav>
          <div className="logo">
            <Rotate top left duration={1500}>
              <a className="name" href="">
                Happy Farm
              </a>
            </Rotate>
            <img src="logo.png" alt="" />
          </div>

          <ul className="nav-list">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="border"></div>

        <section className="content-section">
          <LightSpeed left duration={1500}>
            <h2>
              "Agriculture is such a rewarding community to be a part of, and
              will only continue to grow if we work together.” - Kristeena
              Patsche.
            </h2>
          </LightSpeed>
          <img src="./content.jpg" alt="content" />
        </section>

        <div className="border"></div>

        <section id="about" className="about-section">
          <img src="./about.jpg" alt="about" />

          <div className="about-text">
            <Roll bottom>
              <h1>About us</h1>
              <p>
                We are <span>Happy Farm</span>, showing people the real meaning
                of happiness and peace since <span>1975</span>. Here, in
                addition to enjoying with the family, if you are interested, you
                will learn about our history, our roots that shaped us to be who
                we are. Our foods are the best, as we use the best raw
                materials, such as excellent quality wheat and mineral water.
              </p>
            </Roll>
          </div>
        </section>

        <div className="border"></div>

        <section className="contact-session" id="contact">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Contact us</h1>
            <p>
              If you have any questions, please do not hesitate to contact us
              using the form below:
            </p>
            <label>Name</label>
            <input
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <label>Email</label>
            <input
              placeholder="Your email adress"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <label>Message</label>
            <textarea
              placeholder="Your message here..."
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
            <button type="submit">Send</button>
          </form>
        </section>

        <footer>
          <p>All rights reserved &copy; 2023 || Made by Igor Moraes Rocha</p>
        </footer>
      </div>
    </Fade>
  );
}

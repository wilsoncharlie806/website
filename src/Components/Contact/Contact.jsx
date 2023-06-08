import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Style/style.css";
import "../Contact/Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  const [name, setName] = useState("");

  const nameValidation = (e) => {
    var nameValue = e.target.value;
    setName(nameValue);
  };

  const [subject, setSubject] = useState("");

  const subjectValidation = (e) => {
    var subjectValue = e.target.value;
    setSubject(subjectValue);
  };

  const [msg, setMsg] = useState("");

  const msgValidation = (e) => {
    var msgValue = e.target.value;
    setMsg(msgValue);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(name.length > 0 && message === true && subject.length > 0 && msg.length > 0) {
      toast.success('Message Sent! Thank you for contacting us.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setEmail("");
        setMessage("");
        setMsg("");
        setName("");
        setSubject("");
      emailjs
      .sendForm(
        "service_9jlfmii",
        "template_smbjtzc",
        form.current,
        "6O31vGHs76pZ018iX"
      )
    } else {
      toast.error('Something went wrong! Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <>
    <ToastContainer />
    <header className="header">
      <div className="container">
        <div className="con">
          <div className="fle text">
            <p className="t1" id="br">
              &lt;body&gt;
            </p>
            <p className="pad1 box2"></p>
            <p className="pad2 box1"></p>
            <p className="pad3 boxb"></p>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="bl">
              &lt;h1&gt;
            </p>
            <p className="pad4 box3"></p>
            <p className="pad5 box4"></p>
            <p className="pad6 boxb"></p>
          </div>

          <div className="fle mar">
            <h1 className="t2 btn">C</h1>
            <h1 className="t2 btn">o</h1>
            <h1 className="t2 btn">n</h1>
            <h1 className="t2 btn">t</h1>
            <h1 className="t2 btn">a</h1>
            <h1 className="t2 btn">c</h1>
            <h1 className="t2 btn">t</h1>
            <h1 className="t2">&nbsp;</h1>
            <h1 className="t2 btn">m</h1>
            <h1 className="t2 btn">e</h1>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="br">
              &lt;/h1&gt;
            </p>
            <p className="pad7 box1"></p>
            <p className="pad8 boxb"></p>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="bl">
              &lt;p&gt;
            </p>
            <p className="box4 pad9"></p>
            <p className="boxb pad10"></p>
          </div>

          <p className="t3 mar text">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>

          <div className="fle text">
            <p className="t1 mar" id="pr">
              &lt;/p&gt;
            </p>
            <p className="box5 pad11"></p>
            <p className="box4 pad12"></p>
          </div>

          <div className="fle text mar">
            <p className="t1" id="bl">
              &lt;form&gt;
            </p>
            <p className="box1 pad7"></p>
            <p className="box2 pad5"></p>
            <p className="boxb pad17"></p>
          </div>

          <form className="mar" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="input-group text">
                <label>Full Name</label>
                <div className="row row1">
                  <input
                    type="text"
                    placeholder="john"
                    id="contact-name"
                    autoComplete="off"
                    name="from_name"
                    onChange={nameValidation}
                    value={name}
                    required
                  />
                  <span
                    className={
                      name.length === 0
                        ? "icon fill-color"
                        : "icon check-color"
                    }
                  >
                    <i
                      className={
                        name.length === 0
                          ? "fa-solid fa-exclamation-circle"
                          : "fa-solid fa-check-circle"
                      }
                    ></i>
                  </span>
                </div>
                <span
                  className={
                    name.length === 0
                      ? "icon fill-color"
                      : "icon check-color"
                  }
                >
                  {name.length === 0
                    ? "Fill Name"
                    : "Perfect"}
                </span>
              </div>

              <div className="input-group right">
                <label>Email</label>
                <div className="row row1">
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    id="email-name"
                    autoComplete="off"
                    name="email_id"
                    onChange={emailValidation}
                    value={email}
                    required
                  />
                  <span
                    className={
                      email.length === 0
                        ? "icon fill-color"
                        : message
                        ? "icon check-color"
                        : "icon error-color"
                    }
                  >
                    <i
                      className={
                        email.length === 0
                          ? "fa-solid fa-exclamation-circle"
                          : message
                          ? "fa-solid fa-check-circle"
                          : "fa-solid fa-xmark-circle"
                      }
                    ></i>
                  </span>
                </div>
                <span
                  className={
                    email.length === 0
                      ? "icon fill-color"
                      : message
                      ? "icon check-color"
                      : "icon error-color"
                  }
                >
                  {email.length === 0
                    ? "Fill Email"
                    : message
                    ? "Valid Email"
                    : "Invalid Email"}
                </span>
              </div>
            </div>

            <div className="col">
              <div className="input-group text">
                <label>Subject</label>
                <div className="row row1">
                  <input
                    type="text"
                    placeholder="Subject"
                    id="subject-name"
                    autoComplete="off"
                    name="subject"
                    onChange={subjectValidation}
                    value={subject}
                    required
                  />
                  <span
                    className={
                      subject.length === 0
                        ? "icon fill-color"
                        : "icon check-color"
                    }
                  >
                    <i
                      className={
                        subject.length === 0
                          ? "fa-solid fa-exclamation-circle"
                          : "fa-solid fa-check-circle"
                      }
                    ></i>
                  </span>
                </div>
                <span
                  className={
                    subject.length === 0
                      ? "icon fill-color"
                      : "icon check-color"
                  }
                >
                  {subject.length === 0
                    ? "Fill Subject"
                    : "Perfect"}
                </span>
              </div>

              <div className="input-group text">
                <label>Your Message</label>
                <div className="row row1">
                  <textarea
                    rows="5"
                    placeholder="Enter your message"
                    id="msg-name"
                    name="message"
                    onChange={msgValidation}
                    value={msg}
                    required
                  ></textarea>
                  <span
                    className={
                      msg.length === 0
                        ? "icon fill-color"
                        : "icon check-color"
                    }
                  >
                    <i
                      className={
                        msg.length === 0
                          ? "fa-solid fa-exclamation-circle"
                          : "fa-solid fa-check-circle"
                      }
                    ></i>
                  </span>
                </div>
                <span
                  className={
                    msg.length === 0
                      ? "icon fill-color"
                      : "icon check-color"
                  }
                >
                  {msg.length === 0
                    ? "Fill Message"
                    : "Perfect"}
                </span>
              </div>
            </div>

            <button className="green-button fade" onClick={sendEmail}>Submit</button>
          </form>

          <div className="fle text mar" style={{ marginTop: "20px" }}>
            <p className="t1" id="br">
              &lt;/form&gt;
            </p>
            <p className="box1 pad12"></p>
            <p className="box3 pad5"></p>
            <p className="boxb pad18"></p>
          </div>

          <div className="fle text">
            <p className="t1" id="db">
              &lt;/body&gt;
            </p>
            <p className="box4 pad14"></p>
            <p className="box2 pad15"></p>
            <p className="boxb pad16"></p>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

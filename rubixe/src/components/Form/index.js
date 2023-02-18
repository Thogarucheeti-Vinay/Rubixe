import React, { useState } from "react";
import { uuid4 } from "uuid4";
import "./index.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameErrorClass, setnameErrorClass] = useState(false);
  const setnameError = (a) => {
    setnameErrorClass(() => a);
  };

  const [numberErrorClass, setnumberErrorClass] = useState(false);
  const setnumberError = (a) => {
    setnumberErrorClass(() => a);
  };

  const [emailErrorClass, setemailErrorClass] = useState(false);
  const setemailError = (a) => {
    setemailErrorClass(a);
  };

  const [emailErrorMsg, setemailErrorMsg] = useState("");
  const setEmailMsg = (a) => {
    setemailErrorMsg(() => a);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailArray = email.split("@");
    const domainArray = email.split(".");
    const checksymbol = emailArray.length !== 2;
    const checkDomain = domainArray.length === 1;
    if (name.length < 5) {
      setnameError(true);
    } else {
      setnameError(false);
    }

    if (phone.length < 10) {
      setnumberError(true);
    } else if (phone.length >= 10) {
      setnumberError(false);
    }

    if (email.length === 0) {
      setemailError(true);
      setEmailMsg("*Required");
    } else if (checksymbol) {
      setemailError(true);
      setEmailMsg("Please include '@' in the email address.");
    } else if (checkDomain) {
      setemailError(true);
      setEmailMsg("Please enter the domain correctly.");
    } else if (emailArray.length === 0) {
      setEmailMsg("Please enter the domain correctly.");
      setemailError(true);
    } else {
      setEmailMsg("");
      setemailError(false);
    }

    const id = uuid4();
    console.log(setnameErrorClass, setemailErrorClass, setnumberErrorClass);
    if (!nameErrorClass && !emailErrorClass && !numberErrorClass) {
      fetch("https://rubixebackend-production.up.railway.app/messageus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, email, phone, message }),
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <div className="newsletter-container">
      <div className="newsletter-div">
        <div className="newsletter">
          <div className="newsletter-content">
            <h3>GET IN TOUCH</h3>
            <p>Please complete the form and we will get back to you.</p>
          </div>

          <div className="newsletter-form">
            <center>
              <h1>Message Us</h1>
            </center>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className={nameErrorClass ? "active" : "inactive"}>
                  Required*
                </p>
              </label>
              <label>
                Email:
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className={emailErrorClass ? "active" : "inactive"}>
                  {emailErrorMsg}
                </p>
              </label>
              <label>
                Phone Number:
                <input
                  placeholder="Enter Your Mobile Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p className={numberErrorClass ? "active" : "inactive"}>
                  Required*
                </p>
              </label>
              <div className="input-container">
                <label>
                  Message:
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={10}
                    className="text-area"
                  />
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

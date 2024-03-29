import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBlur = (field) => {
    switch (field) {
      case "name":
        setNameValid(name.trim() !== "");
        break;
      case "email":
        setEmailValid(validateEmail(email));
        break;
      case "message":
        setMessageValid(message.trim() !== "");
    }
  };

  const isFormValid = nameValid && emailValid && messageValid;

  const handleSubmit = (event) => {
    event.preventDefault();
      alert("Email sending not yet implemented")
  };

  return (
    <form className="contacts" onSubmit={handleSubmit}>
      <h2 id="Contact_Info">Contact Info</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        onBlur={() => handleBlur("name")}
      ></input>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={() => handleBlur("email")}
      ></input>
      <label htmlFor="message">Message:</label>
      <textarea
        type="text"
        id="message"
        value={message}
        onChange={handleMessageChange}
        onBlur={() => handleBlur("message")}
      ></textarea>
      {!nameValid && <p className="error-text">Name is required.</p>}
      {!emailValid && <p className="error-text">Your email is invalid.</p>}
      {!messageValid && <p className="error-text">Message is required.</p>}
      <button if="submit" type="submit"  disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

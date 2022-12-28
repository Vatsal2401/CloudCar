import React, { useState } from 'react';
// import "./contact.css"
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the message to the server or perform other necessary actions here

    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {success ? (
        <p>Thanks for your message! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;

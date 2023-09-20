import React from "react";

export default function Contacts() {
  return (
    <div className="contact-container">
      <div className="contact-greeting">
        <h1 className="contact-header">Contact</h1>
        <p className="contact-message">
          I would love to hear about your project and how I <br/>could help. Please
          fill in the form, and I’ll get back<br/> to you as soon as possible.
        </p>
      </div>
        <div className="form-container">
            <form action="">
                <label htmlFor = "name">NAME</label>
                <input type="text" id = "name" name = "name"/>

                <label htmlFor = "email">EMAIL</label>
                <input type="text" id = "name" name = "email"/>

                <label htmlFor= "message">MESSAGE</label>
                <textarea id="message" name="message" style ={{height:`150px`}}></textarea>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
  );
}

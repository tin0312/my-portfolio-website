import React from "react";
import Airtable from "airtable";

export default function Contacts() {
  // Store form data
  const [formInfo, setFormInfo] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInfo);
    window.alert("Messaged sent, have a good day :)")

    try {
      const base = new Airtable({
        apiKey: "patVJYRDfNeQgFxcb.6d134f1e7190daf5a66ed80d732be67c3e981d8a0f9221dfe03eca5e901d8a45"
      }).base("app2ECwavIy178eTW");
      // create a record
      const records = await base("Users Inquiry").create([
        {
          fields: {
            Name: formInfo.name,
            Email: formInfo.email,
            Message: formInfo.message,
          },
        },
      ]);
      setFormInfo({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error creating record:", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-greeting">
        <h1 className="contact-header">Contact</h1>
        <p className="contact-message">
          I would love to hear about your project and how I <br />
          could help. Please leave me a message, and I’ll get back
          <br /> to you as soon as possible.
        </p>
      </div>
      <div onSubmit={handleSubmit} className="form-container">
        <form action="">
          <label htmlFor="name">NAME</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">EMAIL</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">MESSAGE</label>
          <textarea
            onChange={handleInputChange}
            id="message"
            name="message"
            required
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

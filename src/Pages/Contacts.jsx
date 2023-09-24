import React from "react";
import Airtable from "airtable";
import { Container, Row, Col } from "react-bootstrap";

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
    window.alert("Messaged sent, have a good day :)");
    //clean texts after fill
    setFormInfo({
      name: "",
      email: "",
      message: "",
    });

    try {
      const base = new Airtable({
        apiKey:
          "patVJYRDfNeQgFxcb.6d134f1e7190daf5a66ed80d732be67c3e981d8a0f9221dfe03eca5e901d8a45",
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
    } catch (error) {
      console.error("Error creating record:", error);
    }
  };

  return (
    <Container fluid className="contact-container pl-0 pr-0 mb-xs-5">
      <Row className="greeting-row d-flex flex-column flex-lg-row w-100">
        <Col xs={12} lg={6} className="contact-greeting mb-xs-5">
          <h1 className="contact-header">Contact</h1>
          <p className="contact-message">
            I would love to hear about your project and how I <br />
            could help. Please leave me a message, and I’ll get back
            <br /> to you as soon as possible.
          </p>
        </Col>
        <Col
          xs={12}
          lg={6}
          onSubmit={handleSubmit}
          className="form-container d-flex justify-content-xs-center justify-content-lg-end pt-4 pb-4 "
        >
          <form action="">
            <label htmlFor="name">NAME</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              required
              value={formInfo.name}
              pattern="[A-Za-z]"
            />

            <label htmlFor="email">EMAIL</label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              required
              value={formInfo.email}
            />

            <label htmlFor="message">MESSAGE</label>
            <textarea
              onChange={handleInputChange}
              id="message"
              name="message"
              required
              value={formInfo.message}
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = () => {};
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" placeholder="Name" value={name} onChange={onChange} />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />{" "}
      Personal
      <input
        type="radio"
        name="type"
        value="professtional"
        checked={type === "professtional"}
      />{" "}
      Professtional
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;

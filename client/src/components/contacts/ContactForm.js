import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { current, updateContact, clearCurrent } = contactContext;

  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current]);

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
      clearCurrent();
      return;
    }
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
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
        onChange={onChange}
        checked={type === "professtional"}
      />{" "}
      Professtional
      <div>
        <input
          type="submit"
          value={current ? "Update contact" : "Add contact"}
          onChange={onChange}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button
            type="button"
            class="btn btn-light btn-block"
            onClick={clearCurrent}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { name, email, phone, type, id } = contact;
  const { deleteContact, setCurrent, clearCurrent, updateContact } =
    useContext(ContactContext);

  const deleteHandler = (id) => {
    deleteContact(id);
    clearCurrent();
  };

  const updateHandler = () => {
    updateContact(contact);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
          style={{ float: "right" }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={setCurrent.bind(null, contact)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={deleteHandler.bind(null, id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;

import React from "react";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";
import FilterContacts from "../contacts/FilterContacts";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

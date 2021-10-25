import React, { useContext, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const FilterContacts = () => {
  const text = useRef("");
  const { filterContacts, clearFilter } = useContext(ContactContext);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(text.current.value);
    } else clearFilter();
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter ... "
        onChange={onChange}
      />
    </form>
  );
};

export default FilterContacts;

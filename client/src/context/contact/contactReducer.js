import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACT,
  CLEAR_CONTACT,
} from "../types";

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [action.payload, ...state.contacts],
      };
    case CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case CLEAR_CONTACT:
      return {
        contacts: null,
        filtered: null,
        current: null,
        error: null,
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          let regex = new RegExp(action.payload, "gi");
          return regex.test(contact.name);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default contactReducer;

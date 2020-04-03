import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = ({ contacts = [], deleteContact }) => (
  <>
    <ul>
      {console.log(contacts)}
      {contacts.map(contact => {
        console.log(contact)
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
      )}) }
      </ul>
  </>
);

export default ContactList;

import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact, contact: { name, number, id }, deleteContact }) => {
  console.log('contactttttt', contact)
  return (
    <div className={styles.box}>
      <li className={styles.contact}>
        <span>{name}, </span>
        <span>{number}</span>
        <button onClick={(e) => deleteContact(e.target.id)} type="button" id={id} className={styles.buttonClass}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ContactListItem;

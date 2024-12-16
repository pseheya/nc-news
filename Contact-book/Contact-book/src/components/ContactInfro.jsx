import { useState } from "react";

const ContactInfro = ({ contact, setSelectedContact }) => {
  const handleBackToList = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <section>
        <h3>Name: {contact.name}</h3>
        <p>Number: {contact.number}</p>
        <p>Notes: {contact.notes}</p>
      </section>
      <button onClick={handleBackToList}>Back to Contacts</button>
    </>
  );
};

export default ContactInfro;

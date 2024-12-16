import { useState } from "react";

const RemoveContact = ({ contacts, setContact, setSelectedContact }) => {
  const handleContactForDelete = (e) => {
    e.preventDefault();
    const copyContacts = [...contacts];
    setSelectedContact((prevContact) => {
      const removedContactList = copyContacts.filter(
        (contact) => contact.number !== prevContact.number
      );
      setContact(removedContactList);
    });
  };

  return <button onClick={handleContactForDelete}>Delete Contact</button>;
};

export default RemoveContact;

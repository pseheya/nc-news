import { useState } from "react";
import AddNewContact from "./AddNewContact";
import ContactInfro from "./ContactInfro";
import RemoveContact from "./RemoveContact";
import ChangeInfo from "./ChangeInfo";
import SearchName from "./SearchName";

const ContactList = () => {
  const [contacts, setContact] = useState([
    {
      name: "Lilu",
      number: 839484646,
      notes: "From work",
    },
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  const getAllContacts = () => {
    const copyContact = [...contacts];
    return copyContact.map((contact) => {
      if (selectedContact) {
        if (
          contact.number === selectedContact.number ||
          contact.name === selectedContact.name
        ) {
          contact.name = selectedContact.name;
          contact.number = selectedContact.number;
        }
      }
      return (
        <li key={contact.number} className="no-mark-list">
          <button onClick={() => setSelectedContact(contact)}>
            {contact.name}
          </button>
        </li>
      );
    });
  };

  return (
    <>
      <SearchName contacts={contacts} />
      <h3>Contacts: {getAllContacts()}</h3>
      {selectedContact && (
        <form>
          <ContactInfro
            contact={selectedContact}
            setSelectedContact={setSelectedContact}
          />

          <ChangeInfo
            contact={selectedContact}
            setSelectedContact={setSelectedContact}
            setContact={setContact}
          />
          <br></br>
          <RemoveContact
            contacts={contacts}
            setContact={setContact}
            setSelectedContact={setSelectedContact}
          />
        </form>
      )}
      <br></br>
      <AddNewContact setContact={setContact} />
    </>
  );
};

export default ContactList;

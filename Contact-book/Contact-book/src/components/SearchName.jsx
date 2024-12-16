import { useState } from "react";
import ContactInfro from "./ContactInfro";

const SearchName = ({ contacts }) => {
  const [searchInput, setSearchInput] = useState("");

  const [searchResult, setSearchResult] = useState([
    {
      name: "",
      number: "",
      notes: "",
    },
  ]);
  const [formClass, setFormClass] = useState("form");

  const handleInputs = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    e.preventDefault();

    const foundContact = contacts.filter(
      (contact) => contact.name.toLowerCase() === searchInput.toLowerCase()
    );

    if (foundContact.length) {
      setSearchResult(foundContact);
      setFormClass("active-form");
    } else {
      alert("This contact does not exist");
      setFormClass("form");
      return;
    }
  };

  const cleanResult = (e) => {
    e.preventDefault();
    setSearchInput("");
    setFormClass("form");
  };

  return (
    <>
      <label htmlFor="search-input" className="for-reader">
        Find Contact:
      </label>
      <input
        type="search"
        id="search-input"
        value={searchInput}
        onChange={handleInputs}
        placeholder="Enter contact name"
      ></input>
      <button onClick={handleSearch}>Search</button>

      <button onClick={cleanResult}>Clear</button>
      <li className={formClass}>
        <p>Name: {searchResult[0].name}</p>
        <p>Number: {searchResult[0].number}</p>
        <p>Notes: {searchResult[0].notes}</p>
      </li>
    </>
  );
};

export default SearchName;

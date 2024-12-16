import { useState } from "react";

const ChangeInfo = ({ setSelectedContact, setContact }) => {
  const [formClass, setFormClass] = useState("form");

  const hanleButtonClick = (e) => {
    e.preventDefault();
    setFormClass((prevClass) =>
      prevClass === "form" ? "active=form" : "form"
    );
  };
  const reset = { name: "", number: "", notes: "" };
  const [inputs, setImputs] = useState({ name: "", number: "", notes: "" });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      if (isNaN(value)) {
        alert("It should be a number");
        return;
      }
    }
    setImputs({ ...inputs, [name]: value });
  };

  const changeContact = (e) => {
    e.preventDefault();

    setSelectedContact((prevContact) => {
      const copyPrevContact = { ...prevContact };
      for (let key in copyPrevContact) {
        if (inputs[key].length > 0) {
          copyPrevContact[key] = inputs[key];
        }
      }
      setFormClass("form");
      return copyPrevContact;
    });
  };

  return (
    <>
      <button onClick={hanleButtonClick}>Change Contact </button>
      <section>
        <li className={formClass}>
          <label htmlFor="change-input">New Name: </label>
          <input type="text" name="name" onChange={handleInputs}></input>
          <label htmlFor="change-number">New Number: </label>
          <input type="text" name="number" onChange={handleInputs}></input>
          <label htmlFor="change-notes">Change Notes: </label>
          <input type="text" name="notes" onChange={handleInputs}></input>
          <button onClick={changeContact}>Save</button>
        </li>
      </section>
    </>
  );
};

export default ChangeInfo;

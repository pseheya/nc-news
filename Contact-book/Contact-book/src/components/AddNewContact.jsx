import { useState } from "react";

const AddNewContact = ({ setContact }) => {
  const [formClass, setFormClass] = useState("form");

  const hanleButtonClick = () => {
    setFormClass((prevClass) =>
      prevClass === "form" ? "active=form" : "form"
    );
  };
  const reset = { name: "", number: "", notes: "" };
  const [imputs, setImputs] = useState({ name: "", number: "", notes: "" });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      if (isNaN(value)) {
        alert("It should be a number");
        return;
      }
    }
    setImputs({ ...imputs, [name]: value });
  };

  const updateList = (e) => {
    e.preventDefault();

    if (!imputs.name || !imputs.number) {
      alert("You need add more information");
      return;
    }
    setContact((prevImput) => {
      setImputs(reset);
      return [...prevImput, imputs];
    });
  };

  return (
    <section>
      <button onClick={hanleButtonClick}>Add New Contact</button>
      <form className={formClass} id="add-form">
        <label htmlFor="inputForName">Add name: </label>
        <input
          type="text"
          name="name"
          id="inputForName"
          required
          maxLength={15}
          value={imputs.name}
          onChange={handleInputs}
          placeholder="Enter name"
        ></input>
        <label htmlFor="input-for-number">Add number: </label>
        <input
          type="text"
          name="number"
          id="input-for-number"
          required
          maxLength={11}
          value={imputs.number}
          onChange={handleInputs}
          placeholder="Enter number"
        ></input>
        <label htmlFor="input-for-notes">Add note: </label>
        <input
          type="text"
          name="notes"
          id="input-for-notes"
          maxLength={50}
          value={imputs.notes}
          onChange={handleInputs}
          placeholder="Enter notes"
        ></input>
        <button onClick={updateList}>Add Number to Contact</button>
        <button onClick={hanleButtonClick}>Clean</button>
      </form>
    </section>
  );
};

export default AddNewContact;

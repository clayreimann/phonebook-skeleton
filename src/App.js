import React from "react";
import "./styles.css";
import { NewContactForm } from "./components/NewContactForm";

import { Phonebook } from "./model/Phonebook";

const pb = new Phonebook();
pb.addContact("Tweety", "Bird", "517-555-1111");
pb.addContact("Bugs", "Bunny", "517-555-2222");
pb.addContact("Roger", "Rabbit", "517-555-3333");

const addContact = ({ argsHere }) => {
  pb.addContact("John", "Doe", 5123232433);
  console.log("Added contact");
};

function getContact() {
  return pb.allContacts().map(contact => (
    <tr>
      <td className="name"> {contact.first + " " + contact.last} </td>
      <td className="phone"> {contact.phone}</td>
    </tr>
  ));
}

export default function App() {
  return (
    <div className="App">
      <h1>My Phonebook</h1>
      <NewContactForm
        msg="Add new contacts in this form"
        addContact={addContact}
      />
      <table>{getContact()}</table>
      {/* render all the contacts here */}
    </div>
  );
}

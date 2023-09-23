import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
// console.log(contacts);
function CreateCard(contact) {
  return (
    <Card
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;

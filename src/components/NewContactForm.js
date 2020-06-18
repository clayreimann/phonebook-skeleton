import React from "react";

const NewContactForm = ({ msg, addContact }) => (
  <div>
    {msg}
    <button onClick={addContact}>Add John Doe</button>
  </div>
);

export { NewContactForm };

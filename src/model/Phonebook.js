class Phonebook {
  contacts = [];

  addContact(first, last, phone) {
    let contact = {
      first,
      last,
      phone
    };
    this.contacts.push(contact);
  }

  findByName(searchString) {
    return [];
  }

  findByPhone(searchString) {
    return [];
  }

  allContacts() {
    return this.contacts;
  }
}

export { Phonebook };

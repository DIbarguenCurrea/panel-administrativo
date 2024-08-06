import "./Contacts.css";
import contactsList from "../../Utils/contactsList";
import { useEffect, useState } from "react";

function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactsList);

  useEffect(() => {
    const results = contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="contactContainer">
      <h4>Contacts</h4>
      <div className="searchBar">
        <input
          type="search"
          id="mySearch"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name..."
        />
      </div>
      {filteredContacts.map((contact, index) => (
        <div className="contactItem" key={index}>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.company}</p>
        </div>
      ))}
    </section>
  );
}

export default Contacts;

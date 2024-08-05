import "./Home.css";
import Profile from "../Profile/Profile";
import Invoices from "../Invoises/Invoices";
import Contacts from "../Contacts/Contacts";
import Messages from "../Messages/Messages";
function Home() {
  return (
    <section className="container">
      <div className="profile">
        <Profile />
      </div>
      <div className="invoices">
        <Invoices />
      </div>
      <div className="contacts">
        <Contacts />
      </div>
      <div className="messages">
        <Messages />
      </div>
    </section>
  );
}

export default Home;

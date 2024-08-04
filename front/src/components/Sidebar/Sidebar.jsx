import { useState } from "react";
import "./Sidebar.css";
import ButtonBurger from "../ButtonBurger/ButtonBurger";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-0 left-0 h-screen pt-5 mr-5 border-gray-600 rounded-lg shadow-lg shadow-slate-600 ">
      <div className="flex m-0 ">
        <ButtonBurger isOpen={isOpen} handleClick={handleClick} />
        {isOpen && (
          <h1 className="p-0 mr-4 text-3xl font-semibold ">Dashboard</h1>
        )}
      </div>
      {isOpen ? (
        <div className="open ">
          <ul className="p-0 m-2 text-md">
            <li className="p-2 mb-2 ml-2 font-semibold cursor-pointer hover:bg-blue-50 hover:rounded-md ">
              Home
            </li>
            <li className="p-2 mb-2 ml-4 font-semibold cursor-pointer hover:bg-blue-50 hover:rounded-md ">
              Invoice
            </li>
            <li className="p-2 mb-2 ml-6 font-semibold cursor-pointer hover:bg-blue-50 hover:rounded-md ">
              Contacts
            </li>
            <li className="p-2 mb-2 ml-8 font-semibold cursor-pointer hover:bg-blue-50 hover:rounded-md ">
              Messages
            </li>
            <li className="p-2 mb-2 ml-5 font-semibold cursor-pointer hover:bg-blue-50 hover:rounded-md ">
              Log Out
            </li>
          </ul>
        </div>
      ) : (
        <div className="open">
          <ul className="p-0 m-2 text-lg">
            <li>
              <img
                src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Home-House--512.png"
                alt="home"
                className="w-8 h-8 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              />
            </li>
            <li>
              <img
                src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/file-invoice-dollar-256.png"
                alt="invoices"
                className="w-8 h-8 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              />
            </li>
            <li>
              <img
                src="https://cdn3.iconfinder.com/data/icons/remixicon-document/24/contacts-book-2-fill-256.png"
                alt="contacts"
                className="w-8 h-8 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              />
            </li>
            <li>
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-256.png"
                alt="messages"
                className="w-8 h-8 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              />
            </li>
            <li>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-57-256.png"
                alt="logout"
                className="w-8 h-8 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

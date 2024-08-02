import { useState } from "react";
import ButtonBurger from "../ButtonBurger/ButtonBurger";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 h-screen pt-5 m-0 border-gray-600 rounded-lg shadow-[0_45px_90px_-25px_rgba(0,0,0,0.9)] ">
      <div className="flex m-0 ">
        <ButtonBurger isOpen={isOpen} handleClick={handleClick} />
        {isOpen && <h1 className="p-0 mr-2 text-4xl font-bold">Dashboard</h1>}
      </div>
      {isOpen && (
        <div>
          <ul className="p-0 m-2 text-lg">
            <li className="p-2 mb-2 font-semibold cursor-pointer text-start hover:bg-blue-50">
              Home
            </li>
            <li className="p-2 mb-2 font-semibold cursor-pointer text-start hover:bg-blue-50">
              Invoice
            </li>
            <li className="p-2 mb-2 font-semibold cursor-pointer text-start hover:bg-blue-50">
              Contacts
            </li>
            <li className="p-2 mb-2 font-semibold cursor-pointer text-start hover:bg-blue-50">
              Message
            </li>
          </ul>
          <div className="flex m-2">
            <h4 className="">Log Out</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

import ButtonBurger from "../ButtonBurger/ButtonBurger";

function Sidebar() {
  return (
    <div className="w-1/6 h-screen border border-red-600">
      <div>
        <ButtonBurger />
      </div>
      <h1 className="text-4xl">Dashboard</h1>
      <h3>Home</h3>
      <h3>Invoice</h3>
      <h3>Contacts</h3>
      <h3>Message</h3>
      <h4 className="">Log Out</h4>
    </div>
  );
}

export default Sidebar;

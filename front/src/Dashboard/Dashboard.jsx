import "./Dashboard.css";
import Home from "../components/Home/Home";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <section className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Home />
      </div>
    </section>
  );
}

export default Dashboard;

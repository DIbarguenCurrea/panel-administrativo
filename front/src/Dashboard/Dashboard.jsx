import "./Dashboard.css";
import Home from "../components/Home/Home";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

function Dashboard() {
  return (
    <section className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Home />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </section>
  );
}

export default Dashboard;

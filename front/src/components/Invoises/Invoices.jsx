import "./Invoices.css";

function Invoices() {
  return (
    <section className="invoicesContainer">
      <div className="totalInvoices">
        <h5 className="text-lg">All Invoices</h5>
        <p className="flex justify-center text-6xl">22</p>
      </div>
      <div className="pendingInvoices">Invoices pending payment</div>
      <div className="totalEarnings">Total earnings</div>
    </section>
  );
}

export default Invoices;

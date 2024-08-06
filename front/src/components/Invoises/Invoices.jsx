import "./Invoices.css";

function Invoices() {
  return (
    <section className="invoicesContainer">
      <div className="totalInvoices">
        <h5 className="text-lg text-extrabold">All Invoices</h5>
        <p className="flex justify-center text-7xl">22</p>
      </div>
      <div className="pendingInvoices">
        <h5 className="text-md text-semibold text-ellipsis">
          Invoices pending payment
        </h5>
        <p className="flex justify-center text-7xl">5</p>
      </div>
      <div className="totalEarnings">
        <h5 className="text-lg text-semibold text-ellipsis">Total earnings</h5>
        <p className="flex justify-center text-7xl">$7,400.00</p>
      </div>
    </section>
  );
}

export default Invoices;

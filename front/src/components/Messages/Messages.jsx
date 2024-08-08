import "./Messages.css";
function Messages() {
  return (
    <div className="messagesContainer">
      <h1 className="pb-3 m-2 text-3xl font-semibold ">Messages</h1>
      <section className="flex flex-col p-2 m-2 rounded-lg bg-slate-100">
        <p className="pb-3 text-sm font-medium">New Message</p>
        <div className="text-sm font-medium">
          To: <span className="text-sm font-light">jsmith@example.com </span>
        </div>
        <div className="text-sm font-medium">
          Subject:{" "}
          <span className="text-sm font-light"> TechCorp Acknowledgements</span>
        </div>
        <div className="text-sm font-medium">
          Message:{" "}
          <span className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore
            magnam. Nulla officiis consequatur odio libero natus, iure
            voluptatem ducimus consectetur quidem minus repudiandae repellat
            temporibus? Perspiciatis consequatur esse officiis!
          </span>
        </div>
      </section>
    </div>
  );
}

export default Messages;

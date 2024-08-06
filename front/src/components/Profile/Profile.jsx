function Profile() {
  return (
    <section className="flex flex-col w-[450px] h-[270px]">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
        alt="photo"
        className="mx-auto mt-10 rounded-full w-28 h-28"
      />
      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <div className="text-3xl text-bold">Jhon Doe</div>
        <div className="text-xl text-semibold">Front-end Developer</div>
      </div>
    </section>
  );
}

export default Profile;

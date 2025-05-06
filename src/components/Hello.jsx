function Hello({ person }) {
  return (
    <div>
      <h1>
        Hello from {person.first_name} {person.last_name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;

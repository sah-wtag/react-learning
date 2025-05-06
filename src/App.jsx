import Hello from "./components/Hello";

function App() {
  // Passing object to a component
  const person = {
    first_name: "Sadman",
    last_name: "Ahmed",
    seatNumbers: [1, 2, 3, 4],
  };
  return (
    <>
      <div className="App">
        <Hello person={person} />
      </div>
    </>
  );
}

export default App;

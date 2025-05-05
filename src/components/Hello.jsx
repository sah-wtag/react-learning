const name = "Sadman";
// function display() {
//   return "Ahmed";
// }
const display = () => "Ahmed";

function Hello() {
  return (
    <div>
      <h1>
        Hello from {name} {display()}
      </h1>
    </div>
  );
}

export default Hello;

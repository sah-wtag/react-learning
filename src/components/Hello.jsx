const name = "Sadman";
// function display() {
//   return "Ahmed";
// }
const display = () => "Ahmed";

function Hello(props) {
  return (
    <div>
      <h1>
        {/* Hello from {name} {display()} */}
        Hello from {props.first_name} {props.last_name} 
      </h1>
    </div>
  );
}

export default Hello;

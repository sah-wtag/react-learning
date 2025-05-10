export default function Message() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to see the message</button>
    </div>
  );
}

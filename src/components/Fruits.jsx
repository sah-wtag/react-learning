export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 12 },
    { name: "Banana", price: 8 },
    { name: "Orange", price: 20 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>
            {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Fruit({ name, price }) {
  return (
    <div>
      <li>
        {price > 10 ? (
          <h3>
            {name} {price}
          </h3>
        ) : (
          <h3>Price is lower</h3>
        )}
      </li>
    </div>
  );
}

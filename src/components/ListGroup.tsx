//PascalCasing

function ListGroup() {
  //rendering a list of items dynamically
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];



  //conditional rendering inside the JSX expression
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
//to use the componenet - export it as a default component
export default ListGroup;

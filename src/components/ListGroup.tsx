//PascalCasing


function ListGroup() {
  //rendering a list of items dynamically
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
        {items.map((item) => 
        (<li key={item}>{item}</li>
         ))}
        </ul>
    </>
  );
}
//to use the componenet - export it as a default component
export default ListGroup;

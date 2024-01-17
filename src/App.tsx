//importing the message component from current folder
import ListGroup from './components/ListGroup';

//creating a new component
//Using PascalCasing
function App() {
  //Using the message component
  return <div><ListGroup/></div> //always close your React components
}

//to use the component-export it
export default App;
// PascalCasing-capitalize first letter of every word
function Message() {
    // Describing the UI - where we use this componenet
    // Not HTML but JSX: JavaScript XML(HTML and JS)
    const name = "Lorraine";
 if (name)
    return <h1>Hello {name}</h1>;
 return <h1>Hello World</h1>;

}

//to use the componenet - export it as a default component
export default Message;

//Next step : Go to the app componenet, to use the new component
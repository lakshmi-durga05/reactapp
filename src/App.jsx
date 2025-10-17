function App() {
  // A variable for JSX expression
  const name = "React";

  // Simple if condition
  let fruit = "Apple";
  if (name === "React") {
    fruit = "Banana";
  }

  return (
    <div>
      {/* React Basics */}
      <h1>Hello from {name}!</h1>

      {/* JSX Expression */}
      <p>2 + 3 = {2 + 3}</p>

      {/* JSX Attribute */}
      <h2 style={{ color: "green" }}>This is styled text</h2>
      <p className="myClass">This is using className instead of class</p>

      {/* If Condition Result */}
      <h3>My fruit is {fruit}</h3>
    </div>
  );
}

export default App;

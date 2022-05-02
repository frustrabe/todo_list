import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Things to do</h1>
      <Todo text='code' />
      <Todo text='more code' />
      <Todo text='a little bit more code' />
    </div>
  );
}

export default App;
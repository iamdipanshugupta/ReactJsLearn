import "./App.css";
import AddTodo from "./components/AddTodo";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
           <h1 className=" text-3xl text-center text-blue-800">Learn Reduc Toolkit</h1>
          <AddTodo />
          <SimpleTodo />
        </div>
      </div>
    </>
  );
}

export default App;

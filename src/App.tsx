import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-5xl font-bold mt-12">TODO LIST</div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;

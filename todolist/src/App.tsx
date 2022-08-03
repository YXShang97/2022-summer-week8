import React from "react";
import "./App.css";
import Title from "./Title/Title";
import List from "./List/List";
import Form from "./Form/Form";

const initialTodos = [
  {
    title: "Learn React",
    completed: false,
    editable: false,
    editInput: "",
  },
  {
    title: "Play Video Games",
    completed: false,
    editable: false,
    editInput: "",
  },
  {
    title: "Do Laundry",
    completed: false,
    editable: false,
    editInput: "",
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  const [input, setInput] = React.useState("");

  const handleAddTodo = () => {
    const newTodos = [...todos];
    newTodos.push({
      title: input,
      completed: false,
      editable: false,
      editInput: "",
    });
    setTodos(newTodos);
    setInput("");
  };

  const handleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditable = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].editable = true;
    newTodos[index].editInput = newTodos[index].title;
    setTodos(newTodos);
  };

  const handleEditInput = (index: number, value: string) => {
    const newTodos = [...todos];
    newTodos[index].editInput = value;
    setTodos(newTodos);
  };

  const handleEditConfirm = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].title = newTodos[index].editInput;
    newTodos[index].editable = false;
    setTodos(newTodos);
  };

  const handleEditCancel = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].editable = false;
    setTodos(newTodos);
  };

  return (
    <div className="App mt-12">
      <Title todos={todos} />
      <List
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditable={handleEditable}
        handleEditInput={handleEditInput}
        handleEditConfirm={handleEditConfirm}
        handleEditCancel={handleEditCancel}
      />
      <Form input={input} setInput={setInput} handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;

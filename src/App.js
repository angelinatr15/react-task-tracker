import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "User1",
      text: "January",
    },
    {
      id: "User2",
      text: "Febuary",
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log("deletel, id)");
  };

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

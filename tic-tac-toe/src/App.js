import { useState } from "react";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (!name || !task) return;

    if (editId) {
      // Editing existing task
      setTasks(
        tasks.map((t) =>
          t.id === editId ? { ...t, name, task } : t
        )
      );
      setEditId(null);
    } else {
      // Adding new task
      setTasks([
        ...tasks,
        { id: Date.now() + Math.random(), name, task },
      ]);
    }

    setName("");
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const t = tasks.find((t) => t.id === id);
    setName(t.name);
    setTask(t.task);
    setEditId(id);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Task Manager</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>{editId ? "Update" : "Add"}</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.name} - {t.task}{" "}
            <button onClick={() => editTask(t.id)}>Edit</button>{" "}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
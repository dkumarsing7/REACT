import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    "Go to Work",
    "Prepare for Interview",
    "Practice React",
  ]);

  const [newTask, setNewTask] = useState("");

  return (
    <div className="min-h-screen">
      <div className="flex flex-col text-center m-auto max-w-fit font-sans font-semibold ">
        <h1 className="text-5xl mt-20 font-bold m-6">TO-DO-LIST</h1>
        <div className="">
          <input
            className="text-2xl border-1 rounded-md border-neutral-200 bg-neutral-100 p-2 mr-4"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="Enter TO-DO"
          />
          <button
            onClick={() => {
              if (newTask.trim() !== "") {
                const copyTask = [...tasks];
                copyTask.unshift(newTask);
                setTasks(copyTask);
                setNewTask("");
              }
            }}
            className="text-2xl border-1 rounded-md border-neutral-200 bg-neutral-100 px-6 py-2 hover:bg-neutral-200 active:bg-neutral-100"
          >
            ADD
          </button>
        </div>
        <ul className="m-6 w-200 mx-auto space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between border-2 rounded-xl min-w-200 max-w-fit text-left text-lg p-2 mx-auto my-2 shadow-sm overflow-auto hover:shadow-lg hover:bg-gray-50 transition-all"
            >
              {task}
              <div className="flex">
                <button
                  onClick={() => {
                    const update = prompt("Enter your TO-DO");
                    if(update){
                        const copyTask = [...tasks];
                        copyTask[index] = update;
                        setTasks(copyTask);
                    }
                  }}
                  className="border-2 px-2 rounded-md ml-4 cursor-pointer hover:bg-neutral-200 active:bg-neutral-100"
                >
                  ✏️
                </button>
                <button
                  onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                  className="border-2 px-2 rounded-md ml-2 cursor-pointer hover:bg-neutral-200 active:bg-neutral-100"
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    if (index > 0) {
                      const copyTasks = [...tasks];
                      [copyTasks[index], copyTasks[index - 1]] = [
                        copyTasks[index - 1],
                        copyTasks[index],
                      ];
                      setTasks(copyTasks);
                    }
                  }}
                  className="border-2 px-2 rounded-md ml-2 cursor-pointer hover:bg-neutral-200 active:bg-neutral-100"
                >
                  ☝️
                </button>
                <button
                  onClick={() => {
                    if (index < tasks.length - 1) {
                      const copyTasks = [...tasks];
                      [copyTasks[index], copyTasks[index + 1]] = [
                        copyTasks[index + 1],
                        copyTasks[index],
                      ];
                      setTasks(copyTasks);
                    }
                  }}
                  className="border-2 px-2 rounded-md ml-2 cursor-pointer hover:bg-neutral-200 active:bg-neutral-100"
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/task");
        const json = await res.json();
        setTasks(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 max-w-[40rem] mx-auto my-8 p-4">
      {tasks &&
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            content={task.content}
          />
        ))}
    </div>
  );
}

export default TaskList;

import TaskCard from "./TaskCard";
import TaskCardLong from "./TaskCardLong";

function TaskList() {
  return (
    <div className="grid grid-rows-auto gap-4 max-w-[64rem] mx-auto my-8 p-4">
      <div className="grid grid-cols-4 gap-4 *:h-auto">
        <TaskCard />
        <TaskCard />
        <TaskCardLong />
        <TaskCard />
      </div>
      <div className="grid grid-cols-4 gap-4 *:w-full *:h-auto">
        <TaskCard />
      </div>
    </div>
  );
}

export default TaskList;

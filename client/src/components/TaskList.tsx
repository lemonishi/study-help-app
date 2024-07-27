import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <div className="flex flex-col gap-4 max-w-[64rem] mx-auto my-8 p-4">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}

export default TaskList;

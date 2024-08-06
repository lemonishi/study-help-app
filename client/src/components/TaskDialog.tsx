import { Button } from "@/components/ui/button";
import Plus from "../assets/plus.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TaskForm from "./TaskForm";
import { useSelector } from "react-redux";

function TaskDialog() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isAuthenticated && (
          <Button
            variant="outline"
            className="bg-green-500 px-2"
          >
            <img src={Plus} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Enter the details of your task. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <TaskForm />
      </DialogContent>
    </Dialog>
  );
}

export default TaskDialog;

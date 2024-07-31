import ModeToggle from "@/components/theme/mode-toggle";
import ProfileAvatar from "./ProfileAvatar";
import RegisterDialog from "./RegisterDialog";
import LoginDialog from "./LoginDialog";
import TaskDialog from "./TaskDialog";

function Navbar() {
  return (
    <header className="flex items-center max-w-[64rem] m-auto p-3 border-b border-border">
      <div className="flex justify-start items-center gap-2 w-[45%]">
        <nav>Nav Items</nav>
        <TaskDialog />
      </div>
      <div className="flex justify-center w-[10%] m-auto ">Logo</div>
      <div className="flex justify-end gap-2 w-[45%]">
        <ModeToggle />
        <LoginDialog />
        <RegisterDialog />
        <ProfileAvatar />
      </div>
    </header>
  );
}

export default Navbar;

import ModeToggle from "@/components/theme/mode-toggle";
import ProfileAvatar from "./ProfileAvatar";

function Navbar() {
  return (
    <header className="flex items-center max-w-[64rem] m-auto p-3 border-b border-border">
      <div className="flex justify-start w-2/5">
        <nav>Nav Items</nav>
      </div>
      <div className="flex justify-center w-1/5 m-auto ">Logo</div>
      <div className="flex justify-end gap-4 w-2/5">
        <ModeToggle />
        <ProfileAvatar />
      </div>
    </header>
  );
}

export default Navbar;

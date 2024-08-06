import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import RegisterForm from "./RegisterForm";

function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
        >
          <small>Register</small>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create your account</DialogTitle>
          <DialogDescription>
            Fill up the fields below. Click submit when you are done
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
        <DialogFooter>
          <small>Already have an account? Log in here.</small>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterDialog;

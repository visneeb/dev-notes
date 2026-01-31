import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type CreateAccountAlertProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateAccountAlert({
  open,
  onOpenChange,
}: CreateAccountAlertProps) {
  return (
    <div>
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent className="flex flex-col items-center justify-center px-10">
          <AlertDialogHeader>
            <AlertDialogCancel className="bg-transparent border-none shadow-none hover:bg-transparent focus:outline-none focus:ring-0 active:bg-transparent absolute right-2 top-2 hover:text-brown-300 p-3 ">
              <button aria-label="Close dialog" className="cursor-pointer ">
                <X />
              </button>
            </AlertDialogCancel>
            <AlertDialogTitle>
              <h2 className="pt-6 pb-2 text-headline-2 text-center text-brown-600 leading-10">
                Create an account to continue
              </h2>
            </AlertDialogTitle>
          </AlertDialogHeader>

          <div className="pb-5">
            <Link to="/signup">
              <Button variant="primary">Create account</Button>
            </Link>
          </div>

          <div className="pb-3 text-body-1 text-brown-400">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline text-brown-600 hover:text-brown-400"
              >
                Log in
              </Link>
            </p>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

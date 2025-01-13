import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CircleCheckBig } from "lucide-react";

function MyAlertDialog({
  isShown,
  setIsShown,
  title = "Successfully",
  isSuccessful = true,
  handleContinue
}) {
  return (
    <AlertDialog open={isShown} onOpenChange={setIsShown} className="w-20">
      <AlertDialogContent className="flex flex-col items-center">
        <AlertDialogHeader>
          <div className="flex flex-col items-center text-3xl">
            <CircleCheckBig
              color={`${isSuccessful ? "green" : "red"}`}
              size={50}
            />
            <AlertDialogTitle className={`${isSuccessful ? "text-green-500 text-3xl" : "text-red-500 text-3xl"}`}>  
              {title}
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default MyAlertDialog;

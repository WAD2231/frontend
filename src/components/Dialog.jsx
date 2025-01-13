import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function Dialog({ label, handleAction, children, open, setOpen, action = "OK" }) {
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center w-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">{label}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription></AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAction}>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Dialog;

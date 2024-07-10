"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
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
import { useToast } from "@/components/ui/use-toast";

export default function DeteleteTicket({ ticketId }: { ticketId: number }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const { toast } = useToast();

  const deleteTicket = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/tickets/${ticketId}`);
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      toast({
        title: "Error",
        description: "An error occurred while deleting the ticket.",
        variant: "destructive",
      })
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: "secondary" })}>
        Delete Ticket
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            ticket.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isDeleting} onClick={deleteTicket}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

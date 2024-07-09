import prisma from "@/prisma/db";
import dynamic from "next/dynamic";

interface Props {
  params: {
    id: string;
  }
}

const TicketForm = dynamic(() => import("@/components/ticket-form"), {
  ssr: false,
});

export default async function EditTicket({ params }: Props) {

  const ticket = await prisma?.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!ticket) {
    return <div className="text-destructive">Ticket not found</div>
  }

  return (
    <div className="w-full px-10 my-5">
      <TicketForm ticket={ticket} />
    </div>
  );
}
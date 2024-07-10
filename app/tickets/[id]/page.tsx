import Link from "next/link";
import prisma from "@/prisma/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TicketStatusBadge from "@/components/ticket-status-badge";
import TicketPriority from "@/components/ticket-priority";
import { Button, buttonVariants } from "@/components/ui/button";
import ReactMarkDown from "react-markdown";
import DeteleteTicket from "./delete";

interface Props {
  params: {
    id: string;
  };
}

export default async function Ticket({ params }: Props) {
  const ticket = await prisma?.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!ticket) {
    return <div className="text-destructive px-10">Ticket not found</div>;
  }

  return (
    <Card className="mx-10">
      <CardHeader className="flex flex-col gap-1">
        <div className="flex items-center justify-between pb-2">
          <TicketStatusBadge status={ticket.status} />
          <TicketPriority priority={ticket.priority} />
        </div>
        <CardTitle>{ticket.title}</CardTitle>
        <CardDescription>
          Created:{" "}
          {ticket.createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReactMarkDown>{ticket.description}</ReactMarkDown>
      </CardContent>
      <CardFooter>
        <p>
          Updated:{" "}
          {ticket.updatedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </CardFooter>
      <div className="flex items-center justify-end gap-3 p-6">
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={buttonVariants({ variant: "default" })}
        >
          Edit
        </Link>
        <DeteleteTicket ticketId={ticket.id} />
      </div>
    </Card>
  );
}

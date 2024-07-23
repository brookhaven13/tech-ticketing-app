import Link from "next/link";
import TicketPriority from "@/components/ticket-priority";
import TicketStatusBadge from "@/components/ticket-status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import { ArrowDown } from "lucide-react";
import { SearchParams } from "./page";

interface Props {
  tickets: Ticket[];
  searchParams: SearchParams;
}

export default function DataTable({ tickets, searchParams }: Props) {
  return (
    <div className="w-full">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-1">
                  <Link href={{ query: { ...searchParams, orderBy: "title" } }}>
                    Title
                  </Link>
                  {"title" === searchParams.orderBy && <ArrowDown size={18} />}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "status" } }}
                  >
                    Status
                  </Link>
                  {"status" === searchParams.orderBy && <ArrowDown size={18} />}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "priority" } }}
                  >
                    Priority
                  </Link>
                  {"priority" === searchParams.orderBy && (
                    <ArrowDown size={18} />
                  )}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "createdAt" } }}
                  >
                    Created At
                  </Link>
                  {"createdAt" === searchParams.orderBy && (
                    <ArrowDown size={18} />
                  )}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">
                      <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                    </TableCell>
                    <TableCell>
                      <TicketStatusBadge status={ticket.status} />
                    </TableCell>
                    <TableCell>
                      <TicketPriority priority={ticket.priority} />
                    </TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

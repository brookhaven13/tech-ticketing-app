import Link from "next/link";
import DataTable from "./data-table";
import { fetchTickets } from "../api/tickets/route";
import { Button, buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/pagination";
import prisma from "@/prisma/db";

interface SearchParams {
  page: number;
}

export default async function Tickets({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const tickets = await fetchTickets();

  const pageSize = 10;
  const page = parseInt(searchParams.page.toString()) || 1;
  const ticketCount = await prisma.ticket.count();

  return (
    <div className="w-full flex flex-col gap-5 px-10 pb-6">
      <div>
        <Link
          href={"/tickets/create"}
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket
        </Link>
      </div>
      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
}

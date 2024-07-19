import Link from "next/link";
import prisma from "@/prisma/db";
import { Status } from "@prisma/client";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/pagination";
import StatusFilter from "@/components/status-filter";
import DataTable from "./data-table";

interface SearchParams {
  status?: Status;
  page: number;
}

export default async function Tickets({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const pageSize = 10;
  const page = +searchParams?.page || 1;

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams?.status as Status)
    ? searchParams?.status
    : undefined;

  let where = {};
  if (status) {
    where = { status };
  } else {
    where = {
      NOT: [{status: "CLOSED"}]
    };
  }

  const ticketCount = await prisma.ticket.count({ where });
  const tickets = await prisma.ticket.findMany({
    where,
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  return (
    <div className="w-full flex flex-col gap-5 px-10 pb-6">
      <div className="flex justify-between gap-2">
        <Link
          href={"/tickets/create"}
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket
        </Link>
        <StatusFilter />
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

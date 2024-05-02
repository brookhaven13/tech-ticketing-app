import prisma from "@/prisma/db";
import DataTable from "./data-table";

export default async function Tickets() {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
}
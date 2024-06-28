import prisma from "@/prisma/db";
import DataTable from "./data-table";
import { fetchTickets } from "../api/tickets/route";

export default async function Tickets() {
  const tickets = await fetchTickets();

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
}
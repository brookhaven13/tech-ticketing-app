import Link from "next/link";
import DataTable from "./data-table";
import { fetchTickets } from "../api/tickets/route";
import { Button } from "@/components/ui/button";

export default async function Tickets() {
  const tickets = await fetchTickets();

  return (
    <div className="w-full flex flex-col gap-5 px-10">
      <div>
        <Button>
          <Link href={"/tickets/create"}>New Ticket</Link>
        </Button>
      </div>
      <DataTable tickets={tickets} />
    </div>
  );
}

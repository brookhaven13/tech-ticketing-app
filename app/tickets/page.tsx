import Link from "next/link";
import DataTable from "./data-table";
import { fetchTickets } from "../api/tickets/route";
import { Button, buttonVariants } from "@/components/ui/button";

export default async function Tickets() {
  const tickets = await fetchTickets();

  return (
    <div className="w-full flex flex-col gap-5 px-10 pb-6">
      <div>
        <Link href={"/tickets/create"} className={buttonVariants({ variant: "default" })}>New Ticket</Link>
      </div>
      <DataTable tickets={tickets} />
    </div>
  );
}

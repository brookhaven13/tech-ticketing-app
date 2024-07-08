"use client";
import dynamic from "next/dynamic";

const TicketForm = dynamic(() => import("@/components/ticket-form"), {
  ssr: false,
});

export default function CreateTicket() {
  return (
    <div className="w-full px-10 my-5">
      <TicketForm />
    </div>
  );
}
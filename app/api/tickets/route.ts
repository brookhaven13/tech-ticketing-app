import { ticketSchema } from "@/Schema/ticket";
import prisma from "@/prisma/db";
import { type NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function fetchTickets() {
  try {
    const tickets = await prisma.ticket.findMany();
    return tickets;
  } catch (error) {
    return [];
  }
}

export async function createTicket(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = ticketSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newTicket = await prisma.ticket.create({
    data: { ...body },
  });
  return NextResponse.json(newTicket, { status: 201 });
}

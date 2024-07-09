import { ticketSchema } from "@/Schema/ticket";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  }
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  console.log(body);
  const validation = ticketSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const updatedTicket = await prisma.ticket.update({
    where: { id: parseInt(params.id) },
    data: { ...body },
  })
  return NextResponse.json(ticket, { status: 201 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),  
    },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  await prisma.ticket.delete({
    where: { id: parseInt(params.id) },
  });
  
  return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
}

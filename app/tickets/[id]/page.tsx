import prisma from "@/prisma/db";

interface Props {
  params: {
    id: string;
  };
}

export default async function Ticket({ params }: Props) {
  const ticket = await prisma?.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  return <div className="flex flex-col gap-4">
    <div>{ticket?.title}</div>
    <div>{ticket?.description}</div>
    <div>{ticket?.status}</div>
    <div>{ticket?.priority}</div>
  </div>;
}
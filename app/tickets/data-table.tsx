import { Ticket } from "@prisma/client"


interface Props {
  tickets: Ticket[]
}

export default function DataTable({ tickets }: Props) {
  return (
    <div>DataTable</div>
  )
}
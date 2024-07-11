interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

export default function Pagination({ itemCount, pageSize, currentPage }: Props) {
  return (
    <div>
      Pagination
    </div>
  );
}
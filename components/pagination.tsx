import {
  ChevronRight,
  ChevronLeft,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

export default function Pagination({
  itemCount,
  pageSize,
  currentPage,
}: Props) {
  const pageCount = Math.ceil(itemCount / pageSize);
  const router = useRouter();
  const searchParams = new URLSearchParams();

  if (pageCount <= 1) {
    return null;
  }

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <ChevronFirst />
      </Button>
      <Button
        variant="outline"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
      <Button
        variant="outline"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <ChevronLast />
      </Button>
    </div>
  );
}

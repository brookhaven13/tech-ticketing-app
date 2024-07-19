"use client";
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

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <ChevronFirst />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === 1}
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
      <div className="w-full flex justify-center">
        Page {currentPage} of {pageCount}
      </div>
    </div>
  );
}

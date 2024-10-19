
"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function Component({}) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-fit mx-auto darkBorder darkFont flex overflow-x-auto sm:justify-center shadow-lg py-12">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons  />
    </div>
  );
}

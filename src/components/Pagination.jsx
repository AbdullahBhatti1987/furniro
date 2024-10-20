
"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function Component({}) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-fit text-md mx-auto darkBorder darkFont flex overflow-x-auto sm:justify-center py-12">
      <Pagination totalPages={3} currentPage={currentPage} showIcons onPageChange={onPageChange} className="shadow-md"  />
    </div>
  );
}

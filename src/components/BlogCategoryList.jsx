import React from "react";

export default function BlogCategoryList() {
  const blogcategorylist = [
    { title: "Craft", count: 2 },
    { title: "Design", count: 8 },
    { title: "Handmade", count: 7 },
    { title: "Interior", count: 1 },
    { title: "Wood", count: 6 },
  ];

  return (
    <ul className="w-full px-2 md:px-4 lg:px-6">
      {blogcategorylist.map((data)=>(
        <li className="w-full flex flex-row justify-between items-center py-4 text-gray-400 font-semibold text-sm md:text-md lg:text-lg" key={data.length}>
        <span>{data.title}</span>
        <span>{data.count}</span>
      </li>
      ))}
    </ul>
  );
}

'use client';

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Link from 'next/link';
function CardPagination() {
  // البيانات الوهمية
  const data = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Rayan Williams`,
    supname: `Vervoerder`,
    title: `Hoe het nieuwe transportsysteem nieuwe ondernemingen beïnvloedt`,
    description: `De luchtvrachtdienst van Adelaar Transport biedt kennis en kansen om te optimaliseren...`,
    tip: `DECEMBER 12, 2023`
  }));

  // عدد العناصر في كل صفحة
  const itemsPerPage = 6;

  // حالة الصفحة الحالية
  const [currentPage, setCurrentPage] = useState(0);

  // تحديد العناصر المعروضة في الصفحة الحالية
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // التعامل مع تغيير الصفحة
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-4 mt-2 ">

      {/* عرض البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-11 mb-16 mt-16 px-4 lg:ml-24 lg:mr-24">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="rounded-md shadow-md bg-white"
          >
            <div className="bg-gray-200 w-full h-52 rounded-t-md"></div>
            <div className="flex items-start justify-between mt-2 px-4">
              <div className="flex items-start">
                <img src="/images/image.png" alt="" className="w-16 h-16 rounded-full" />
                <div className="ml-2">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-gray-500">{item.supname}</div>
                </div>
              </div>
              
              <div className="p-1 w-full rounded-l-md bg-orange text-white" style={{marginTop:"-2rem", marginRight:"-1rem"}}>
                {item.tip}
             </div>
            </div>
            <hr className="border-1 border-gray-300 my-6" />
            <div className="px-8 pb-8">
              <h2 className="text-xl font-semibold text-orange">{item.title}</h2>
              <p className="text-gray-700 mt-2 mb-2">{item.description}</p>
              <Link className="font-semibold text-orange-500" href="/blog/details" >Read Article {'->'}</Link>
            </div>
          </div>
        ))}
      </div>

      {/* الترقيم */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center items-center mt-8 space-x-2"}
        pageClassName={"px-3 py-1 border rounded"}
        pageLinkClassName={"text-gray-700"}
        previousClassName={"px-3 py-1 border rounded"}
        previousLinkClassName={"text-orange"}
        nextClassName={"px-3 py-1 border rounded"}
        nextLinkClassName={"text-orange"}
        activeClassName={"bg-orange text-white"}
      />
    </div>
  );
}

export default CardPagination;

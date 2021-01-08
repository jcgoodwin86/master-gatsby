import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some more variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  return (
    <div>
      <Link to={`${base}/${prevPage}`}>&#8592; Prev</Link>
    </div>
  );
}

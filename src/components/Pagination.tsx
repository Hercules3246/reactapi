import React from 'react';
interface IFilters {
    postsPerPage: number,
    totalPosts : number,
    // paginate:React.MouseEventHandler<HTMLButtonElement>
    paginate: (e: number) => void
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: IFilters) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}  href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
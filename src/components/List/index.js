import React, { useState, useCallback } from "react";
import User from "../User";
import useSeacrhData from "../../api/useSeacrhData";

import './List.css';

function List({ searchQuery }) {
  const [page, setPage] = useState(1);
  const { isLoading, isSuccess, isError, data, perPage } = useSeacrhData(searchQuery, page);
  const { total_count: totalresults = 0, items = [] } = data || {};
  const pageCount = Math.ceil(totalresults / perPage);

  const handlePageClick = useCallback((isNext) => {
    const newPage = isNext ? page + 1 : page - 1;
    setPage(newPage);
  }, [setPage, page])

  return (
    <div className="list">
        {isLoading && "Loading..."}
        {isError && "Cannot load the data"}
        {isSuccess &&
          <>
            <h2>{totalresults} user results</h2>
            {items.map((user) => <User key={user.login} {...user} />)}
            {totalresults > perPage &&
              <>
                <button onClick={() => handlePageClick(false)} disabled={page === 1}>
                  Previous Page
                </button>
                {' '}
                <button onClick={() => handlePageClick(true)} disabled={page === pageCount}>
                  Next Page
                </button>
              </>
            }
          </>
        }
    </div>
  );
}

export default List;

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setItemsPerPage } from '../slices/moviesSlice';

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, filteredList } = useSelector(state => state.movies);
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleItemsPerPageChange = (event) => {
    dispatch(setItemsPerPage(Number(event.target.value)));
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value={4}>4 items per page</option>
        <option value={8}>8 items per page</option>
        <option value={12}>12 items per page</option>
      </select>
    </div>
  );
}

export default Pagination;

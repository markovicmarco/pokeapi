import "./Pagination.css";

const Pagination = ({ currentPage, itemsPerPage, totalItems, changePage }) => {

  const pageNumbers = [];

  let totalPages = Math.ceil(totalItems/itemsPerPage)
  let initialPage = currentPage < 5 ? 1 : (currentPage-4)
  let lastPage = totalPages
  if(currentPage < (totalPages-5)){
    if(currentPage > 5){
      lastPage = (currentPage+4)
    } else {
      lastPage = 9;
    }
  } 

  for(let i = initialPage; i <= lastPage; i++){
    pageNumbers.push(i);
  }

  return(
    <div className="pagination">
      {initialPage > 1 && 
      <button onClick={() => changePage(initialPage-1)}>
        <i className="fas fa-chevron-left"></i>
      </button>}
        {pageNumbers.map((value) => {
          return(
            <button 
            key={value}
            onClick={() => changePage(value)}
            className={value === currentPage ? "selected" : ""}
            >{value}</button>
          )
        })}
      {lastPage < totalPages && 
      <button onClick={() => changePage(lastPage+1)}>
        <i className="fas fa-chevron-right"></i>
      </button>}
    </div>
  )
}

export default Pagination;
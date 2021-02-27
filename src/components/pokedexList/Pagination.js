const Pagination = ({ currentPage, itemsPerPage, totalItems, changePage }) => {

  const pageNumbers = [];

  for(let i = 1; i < Math.ceil(totalItems/itemsPerPage); i++){
    pageNumbers.push(i);
  }

  return(
    <div>
      {pageNumbers.map((value) => {
        return(
          <button 
          key={value}
          onClick={() => changePage(value)}
          >{value}</button>
        )
      })}
    </div>
  )
}

export default Pagination;
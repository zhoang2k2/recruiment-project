import './pagination.scss'

// eslint-disable-next-line react/prop-types
const Pagination = ({totalPost , postPerPage , setCurrentPage , currentPage }) => {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <div className="pagination">
                {pages.map((page, index) => {
                    const isCurrentPage = page === currentPage;
                    const paginationBtn = `pagination-btn ${isCurrentPage ? 'active-hover' : ''}`
                    return (
                        <button 
                            key={index} 
                            className={paginationBtn}
                            onClick={() => setCurrentPage(page)}
                        >
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default Pagination;
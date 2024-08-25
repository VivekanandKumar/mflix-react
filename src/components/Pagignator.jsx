import ReactPaginate from 'react-paginate';
const Pagignator = ({ data }) => {
    

    return (
        <ReactPaginate
            nextLabel={<div className='d-flex algn-items-center'><span>Next</span><span className="material-symbols-rounded">arrow_right</span></div>}
            onPageChange={data.handlePageClick}
            pageRangeDisplayed={data.range}
            marginPagesDisplayed={0}
            pageCount={data.pageCount}
            previousLabel={<div className='d-flex algn-items-center'><span className="material-symbols-rounded">arrow_left</span><span>Prev</span></div>}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link ps-1 shadow-none"
            nextClassName="page-item"
            nextLinkClassName="page-link pe-1 shadow-none"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagignator;
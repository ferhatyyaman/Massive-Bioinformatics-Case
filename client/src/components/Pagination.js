import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { MainContext,useContext } from '../context';

export const PaginationComponents = () => {
    const {
    currentPage,
    setCurrentPage,
    filteredData,
    itemsPerPage
  }=useContext(MainContext)

    const handlePageChange = (selectedPage) => { //sayfa numarasının değiştirilmesini sağlayan fonksiyon
        setCurrentPage(selectedPage);
      };
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);     //toplam sayfa sayısı
    const itemsPerPageInGroup = 10;                                   
    const activeGroup = Math.floor(currentPage / itemsPerPageInGroup);    // aktif sayfa numaraları grubu
    const startPage = activeGroup * itemsPerPageInGroup;                  //aktif ilk sayfa numarası
    const endPage = Math.min(startPage + itemsPerPageInGroup, totalPages);//aktif son sayfa numarası

  return (
    <div className="pagination">
  <Pagination>
    <Pagination.First
      onClick={() => handlePageChange(0)}
      disabled={currentPage === 0}
    />
    <Pagination.Prev
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 0}
    />
    {Array.from({ length: endPage - startPage }, (_, index) => (
      <Pagination.Item
        key={index}
        active={currentPage === startPage + index}
        onClick={() => handlePageChange(startPage + index)}
      >
        {startPage + index + 1}
      </Pagination.Item>
    ))}
    <Pagination.Ellipsis
      onClick={() => handlePageChange(endPage)}
      disabled={endPage === totalPages}
    />
    <Pagination.Next
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages - 1}
    />
    <Pagination.Last
      onClick={() => handlePageChange(totalPages - 1)}
      disabled={currentPage === totalPages - 1}
    />
  </Pagination>
</div>
  )
}

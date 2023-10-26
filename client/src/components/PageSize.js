import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { MainContext,useContext } from '../context';

export const PageSize = () => {

  const {
    itemsPerPage,
    setItemsPerPage 
  }=useContext(MainContext)
    
    const handleItemsPerPageChange = (items) => { // kullanıcının görüntülecek veri sayısını seçebilmesine yarayan fonksiyon
        setItemsPerPage(items);
      };
  return (
        <div className="page-size">
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              Veri Sayısı: {itemsPerPage}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleItemsPerPageChange(10)}>10</Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>20</Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemsPerPageChange(30)}>30</Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemsPerPageChange(40)}>40</Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemsPerPageChange(50)}>50</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
  )
}

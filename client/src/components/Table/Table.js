import React from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { ModalComponent } from './Modal';
import { MainContext,useContext } from '../../context';

export const TableComponent = () => {
    const {
      filteredData,
      loading,
      filterValues,
      setFilterValues,
      currentPage,
      itemsPerPage,
      handleFilterAndSort,
      ordering,
      setOrdering,
      setShowModal,
      setSelectedCellData,
  }=useContext(MainContext)

   


    const handleFilterChange = (e, column) => { //sütun başlığındaki arama filtreleme işlem fonksiyonu
        const { value } = e.target;
        setFilterValues({
          ...filterValues,
          [column]: value,
        });
        handleFilterAndSort();
      };

    const handleSort = (column) => {  //sütun başlığına tıklanarak sıralama yapmaya yarayan fonksiyon
        const newOrdering = { ...ordering };
        if (newOrdering[column] === 'asc') {
          newOrdering[column] = 'desc';
        } else {
          newOrdering[column] = 'asc';
        }
        setOrdering(newOrdering);
        handleFilterAndSort();
      };

      const handleCellClick = (data) => {  // tablo hücrelerindeki verileri detaylı göstermeye yarayan fonksiyon
        setSelectedCellData(data); 
        setShowModal(true);
      };
      

    const paginatedData = filteredData.slice(  // sayfalama yaparken belirli sayfaların verilerini gösteren fonksiyon
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
    
  return (
    <div className='container-table'>
      {loading ? (
         <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className='content-table'>
        <Table responsive="sm" striped bordered hover size="sm" >
          <thead>
            <tr>
              <th onClick={() => handleSort('main_uploaded_variation')}>Main Uploaded<br/>Variation</th>
              <th onClick={() => handleSort('main_existing_variation')}>Main Existing <br/>Variation</th>
              <th onClick={() => handleSort('main_symbol')}>Main Symbol</th>
              <th onClick={() => handleSort('main_af_vcf')}>Main AF VCF</th>
              <th onClick={() => handleSort('main_dp')}>Main DP</th>
              <th onClick={() => handleSort('details2_provean')}>Details2 Provean</th>
              <th onClick={() => handleSort('details2_dann_score')}>Details2 Dann <br/>Score</th>
              <th onClick={() => handleSort('links_mondo')}>Links Mondo</th>
              <th onClick={() => handleSort('links_pheno_pubmed')}>Links Pheno <br/>Pubmed</th>
            </tr>
            <tr>
            <td>
            <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['main_uploaded_variation'] || ''}
              onChange={(e) => handleFilterChange(e, 'main_uploaded_variation')}
            />
            </InputGroup>
            </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['main_existing_variation'] || ''}
              onChange={(e) => handleFilterChange(e, 'main_existing_variation')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['main_symbol'] || ''}
              onChange={(e) => handleFilterChange(e, 'main_symbol')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['main_af_vcf'] || ''}
              onChange={(e) => handleFilterChange(e, 'main_af_vcf')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['main_dp'] || ''}
              onChange={(e) => handleFilterChange(e, 'main_dp')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['details2_provean'] || ''}
              onChange={(e) => handleFilterChange(e, 'details2_provean')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['details2_dann_score'] || ''}
              onChange={(e) => handleFilterChange(e, 'details2_dann_score')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['links_mondo'] || ''}
              onChange={(e) => handleFilterChange(e, 'links_mondo')}
            />
            </InputGroup>
          </td>
          <td>
          <InputGroup >
            <Form.Control
              type="text"
              placeholder="Ara..."
              value={filterValues['links_pheno_pubmed'] || ''}
              onChange={(e) => handleFilterChange(e, 'links_pheno_pubmed')}
            />
            </InputGroup>
          </td>
            </tr>
           

          </thead>
          <tbody> 
          
          {paginatedData.map((item, index) => (
          <tr key={index}>
            <td onClick={() => handleCellClick(item.main_uploaded_variation)}>{item.main_uploaded_variation}</td>
            <td onClick={() => handleCellClick(item.main_existing_variation)}>{item.main_existing_variation}</td>
            <td onClick={() => handleCellClick(item.main_symbol)}>{item.main_symbol}</td>
            <td onClick={() => handleCellClick(item.main_af_vcf)}>{item.main_af_vcf}</td>
            <td onClick={() => handleCellClick(item.main_dp)}>{item.main_dp}</td>
            <td onClick={() => handleCellClick(item.details2_provean)}>{item.details2_provean}</td>
            <td onClick={() => handleCellClick(item.details2_dann_score)}>{item.details2_dann_score}</td>
            <td onClick={() => handleCellClick(item.links_mondo)}>{item.links_mondo}</td>
            <td onClick={() => handleCellClick(item.links_pheno_pubmed)}>{item.links_pheno_pubmed}</td>
          </tr>
        ))}
          </tbody>
        </Table>
        </div>
      )}
     <div>
       <ModalComponent/> 
     </div>
    </div>
  );
}


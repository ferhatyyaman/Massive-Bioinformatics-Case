import React from 'react';
import styles from '../styles/Home.css';
import Button from 'react-bootstrap/Button';
import { PaginationComponents } from './Pagination';
import { PageSize } from './PageSize';
import { NavbarComponent } from './Navbar';
import { TableComponent } from './Table/Table';
import { MainContext,useContext } from '../context';

export const Home = () => {

    const { 
      resetFiltersAndSort,
  }=useContext(MainContext)

  return (
    <div className='container'>
    <div className='container-nav'>    
      <NavbarComponent />
    </div>
    <div className='container-btn'>
      <Button variant="secondary" onClick={resetFiltersAndSort}>Filtreleri ve Sıralamayı Sıfırla</Button>
    </div>
    <div className='content-table'>
      <TableComponent/>
    </div>
    <div className='page-size'>
      <PageSize/>
    </div>
    <div className='pagination'>
      <PaginationComponents/>
    </div>
    </div>
  )
}

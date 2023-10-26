import React, { useState, useEffect } from 'react';
import styles from './styles/App.css';
import { ErrorPage } from './components/Error';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { MainContext } from './context';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterValues, setFilterValues] = useState({});
  const [ordering, setOrdering] = useState({}); 
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedCellData, setSelectedCellData] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:5000/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data.data);
        handleFilterAndSort();
      } catch (error) {
        console.error('API isteği sırasında hata oluştu:', error);
      } finally {
        setLoading(false);
       
      }
    };
    fetchData();
  }, []);



  const handleFilterAndSort = () => { // verileri filtreleme ve sıralama fonksiyonu
    setLoading(true);
    const filteredAndSortedData = data.slice();
  
    for (const key in ordering) { // sıralama işlemleri
      if (ordering[key] === 'asc') {
        filteredAndSortedData.sort((a, b) => {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return a[key] - b[key];
          } else {
            if (a[key] !== null && b[key] !== null) {
              return a[key].toString().localeCompare(b[key]);
            } else {
              return 0;
            }
          }
        });
      } else if (ordering[key] === 'desc') {
        filteredAndSortedData.sort((a, b) => {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return b[key] - a[key];
          } else {
            if (a[key] !== null && b[key] !== null) {
              return b[key].toString().localeCompare(a[key]);
            } else {
              return 0;
            }
          }
        });
      }
    }
  
    const filteredData = filteredAndSortedData.filter((item) => { //filtreleme işlemleri
      return Object.keys(filterValues).every((key) => {
        const filterValue = filterValues[key].toLowerCase();
        return item[key] !== null && item[key].toString().toLowerCase().includes(filterValue);
      });
    });
    setFilteredData(filteredData);
    setLoading(false);
  };


  const resetFiltersAndSort = () => {// Sıralama ve filtreleme değerlerini sıfırlayan fonksiyon
    setFilterValues({});
    setOrdering({}); 
    handleFilterAndSort(); 
  };

  const value ={ // contextApi
    data,
    setData,
    filteredData,
    setFilteredData,
    loading,
    setLoading,
    filterValues,
    setFilterValues,
    ordering,
    setOrdering,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    resetFiltersAndSort,
    handleFilterAndSort,
    showModal,
    setShowModal,
    selectedCellData,
    setSelectedCellData,
  }
  
  return (
    
    <MainContext.Provider value={value}>

    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/error" element={<ErrorPage />} />  
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>

      
    </MainContext.Provider>
    
  );
}

export default App;

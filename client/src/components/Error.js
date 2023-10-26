import React from 'react'
import { TbError404,TbFaceIdError } from 'react-icons/tb';
import '../styles/Error.css';

export const ErrorPage = () => {
  return (
    <div className='container-error'>
      <h2><TbError404/></h2>
      <h1>Hata Sayfası</h1>
      <h5>Geçersiz URL. Lütfen doğru bir adresi deneyin.</h5>
      <h1><TbFaceIdError/></h1>
    </div>
  )
}

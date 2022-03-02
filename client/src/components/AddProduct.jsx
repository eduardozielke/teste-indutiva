import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { renderOptions, renderPhotos } from '../utils/GeneralFunctions';

function AddProduct() {
  const [selectedImages, setSelectedImages] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    async function fetchApi() {
      let categoryResponse = await api.get('categories')
      setCategories(categoryResponse.data)
      window.scrollTo(0, 0)
    }
    fetchApi()
  }, [])

  function imgHandler(e) {
    if(e.target.files) {
      const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file))
      setSelectedImages(fileArray)
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file))
    }
  }

  return (
    <div className='containerForm'>
        <form method='POST' action="/products" encType='multipart/form-data' className='addProductForm'>
            <input type='text' name='productName' placeholder='Nome do produto' className='input-form' required/>
            <div className='inputImageWrapper'>
              <label htmlFor="photos">Adicione as imagens do produto</label>
              <input type='file' name='photos' id='photos' onChange={imgHandler} multiple required/>
            </div>
            <div className='addImageWrapper'>
                {renderPhotos(selectedImages)}
            </div>
            <textarea name='description' placeholder='Descrição do produto'></textarea>
            <input type='number' name='price' placeholder='Preço do produto' className='input-form' required />
            <label htmlFor="category">Categoria</label>
            <select name='category' id='category' required>
              {renderOptions(categories)}
            </select>
            <button className='buttonAddProduct'>Adicionar Produto</button>
        </form>
    </div>
  )
}

export default AddProduct;

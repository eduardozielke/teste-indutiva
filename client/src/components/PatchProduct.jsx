import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import api from '../services/api';
import { renderPhotos, renderOptions } from '../utils/GeneralFunctions';
import NotLoad from './NotLoad';

function PatchProduct() {
  const [selectedImages, setSelectedImages] = useState([])
  const [category, setCategory] = useState(null)
  const [product, setProduct] = useState(null)
  const id = useParams().id

  useEffect(()=>{
    async function fetchApi() {
      let resCategory = await api.get('categories')
      setCategory(resCategory.data)
      
      let item = await api.get(`products/${id}`)
      setSelectedImages(item.data.photos)
      setProduct(item.data)
    }
    fetchApi()
    window.scrollTo(0, 0)
  }, [id])

  function imgHandler(e) {
    if(e.target.files) {
      const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file))
      setSelectedImages(fileArray)
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file))
    }
  }

  function getMoney(str) {
    return str
      .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
      .replace(',', '.');      // Troca o separador decimal (`,` -> `.`)
  }

  return (product && category ?
    <div className='containerForm'>
        <form method='POST' action={`/products/${id}`} encType='multipart/form-data' className='addProductForm'>

            <input type='text' defaultValue={product.productName} name='productName' placeholder='Nome do produto' className='input-form'/>
            <div className='inputImageWrapper'>
              <label htmlFor="photos">Adicione as imagens do produto</label>
              <input type='file' name='photos' id='photos' onChange={imgHandler} multiple/>
            </div>
            <div className='addImageWrapper'> 
                {renderPhotos(selectedImages)}
            </div>
            <textarea name='description' defaultValue={product.description} placeholder='Descrição do produto'></textarea>
            <input type='number' defaultValue={getMoney(product.price)} name='price' placeholder='Preço do produto' className='input-form'/>
            <label htmlFor="category">Categoria</label>
            <select name='category' defaultValue={product.category} id='category'>
              {renderOptions(category)}
            </select>
            <button className='buttonAddProduct'>Editar produto</button>
        </form>
    </div>: <NotLoad/>
  )
}

export default PatchProduct;
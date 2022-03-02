import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import ImageSlider from './ImageSlider';
import {TabTitle} from '../utils/GeneralFunctions'
import { useSelector, useDispatch } from 'react-redux';
import {addItem} from '../actions/cartActions'
import NotLoad from './NotLoad';
import { useEffect } from 'react';

function Product() {
  const [product, setProduct] = useState(null)
  const [alreadyInCart, setAlreadyInCart] = useState(false)
  const id = useParams().id
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const cart = useSelector(state => state.cart)

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  async function getProduct() {
    let item = await fetch(`/products/${id}`).then(res => res.json()).then(data => {
      TabTitle(data.productName)
      cart.forEach(item => {
        if(data._id === item._id) {
          setAlreadyInCart(true)
        }
      })
      return data
    })
    return item
  }

  function handleAddCartClick() {
    if(alreadyInCart) return
    dispatch(addItem(product))
    setAlreadyInCart(true)
  }
  
  if(!product) {
    getProduct().then(item => {
      setProduct(item)
    })
  }

  return (product ? 
    
    <div className='product'>
      <h1 className='productName'>{product.productName}</h1>
      <div className="productSection">
        <div className='imageWrapper'>
          <ImageSlider product={product}></ImageSlider>
        </div>
        <div className='buyWrapper'>
          <h1>{product.price}</h1>
          <div className='buyButtons'>
            <button className='buyButton btn btn-warning btn-sm'>Comprar</button>
            <button className='addCartButton btn btn-primary btn-sm' onClick={handleAddCartClick}>Adicionar ao carrinho</button>
          </div>
          {alreadyInCart && (
              <div className='productAlreadyInCart'>
                <h1>Produto adicionado ao carrinho</h1>
              </div>
            )}
          {auth && (<Link to={`/editar/${id}`} className='patchProduct btn btn-info'>Editar Produto</Link>)}
        </div>
      </div>
      <h2 className='descriptionTitle'>Descrição do produto:</h2>
      <div className="descriptionWrapper">
        <pre>{product.description}</pre>
      </div>
    </div> : <NotLoad />
  )
}

export default Product;

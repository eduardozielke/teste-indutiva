import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeItem} from '../actions/cartActions'

function Cart() {
  const cartItens = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  function handleRemoveCartClick(id) {
    dispatch(removeItem(id))
  }

  function renderItemsPrice(itens) {
    function getMoney(str) {
      return str
        .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
        .replace(',', '.');      // Troca o separador decimal (`,` -> `.`)
    }

    let allPrices = 0
    itens.forEach(item => {
      allPrices += Number(getMoney(item.price))
    })
    return allPrices.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }

  function renderItems(itens) {
    return (
      itens.map((item, index) => 
        <div className='cartProduct' key={index}>
          <h1>{item.productName}</h1>
          <div className='imgAndPriceWrapper'>
              <div className='cartImgWrapper'><img src={item.photos[0]} alt={item.productName}></img></div>
              <div className='cartPriceWrapper'>
                {`${item.price}`}
                <button className='removeCartButton btn btn-danger btn-sm' 
                onClick={()=>{handleRemoveCartClick(item._id)}}>Remover do carrinho</button>
              </div>
          </div>
        </div>
      )
    )
  }

  return (
    <div className='cart'>
        <div className='cartProducts'>
          {renderItems(cartItens)}
        </div>
        <div className='productsInfo'>
          <div className='allPriceWrapper'>
            <h1>Resumo</h1>
            <p>Valor total dos produtos</p> 
            {renderItemsPrice(cartItens)}
          </div>
          <div className='infoButtons'>
            <button className='btn btn-success btn-lg'>Ir para o pagamento </button>
            <Link to="/" className='btn btn-primary btn-lg'>Continuar comprando</Link>
          </div>
        </div>
    </div>
  )
}

export default Cart;

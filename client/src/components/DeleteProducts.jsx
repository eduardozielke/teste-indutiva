import React, { useEffect, useState } from 'react'
import api from '../services/api'
import NotLoad from './NotLoad'

function DeleteProducts() {
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)

   async function deleteProduct(id) {
        await api.delete(`products/${id}`)
        document.location.reload()
    }

    useEffect(()=>{
        async function fetchApi() {
            let response = await api.get('products')
            setProducts(response.data)

            let categoryResponse = await api.get('categories')
            setCategories(categoryResponse.data)
        }
        fetchApi()
        window.scrollTo(0, 0)
    }, [])


  return ( products && categories ? (
    <div className='deleteProduct'>
        {products.map((product, index)=>
            <div className='cartProduct' key={index}>
                <h1>{product.productName}</h1>
                <div className='imgAndPriceWrapper'>
                    <div className='cartImgWrapper'>
                        <img src={product.photos[0]} alt={product.productName}/>
                    </div>
                    <div className='cartPriceWrapper'>
                        {`${product.price}`}
                        <button className='removeCartButton btn btn-danger btn-sm' 
                        onClick={()=>{deleteProduct(product._id)}}>Remover do carrinho</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  ) : <NotLoad/>
  )
}

export default DeleteProducts
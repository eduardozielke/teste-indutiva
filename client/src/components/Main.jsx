import React, { useEffect, useState } from "react";
import Banner from './Banner';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import NotLoad from "./NotLoad";
import api from "../services/api";
import { renderOptions } from "../utils/GeneralFunctions";
import {BsSearch} from 'react-icons/bs'

function Main() {
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [productsLength, setProductsLength] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')    
    const {category} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

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

    useEffect(()=>{
        setProductsLength(document.getElementsByClassName('box').length)
    })

    async function handleCategory(e) {
        let category = e.target.value
        let path = location.pathname = `/${category}`

        if(category === 'todos') {
            let response = await api.get('products')
            setProducts(response.data)
            setProductsLength(response.data.length)
            navigate('/')
        } else {
            let response = await api.get(`products/find/${category}`)
            setProducts(response.data)
            setProductsLength(response.data.length)
            navigate(path)
        }
    }

    return( products && categories ?
        <>
        <Banner />
        <main>
            <div className="board">
                <div className='listingOrdenation'>
                    <div className='listingWrapper'>
                        <div className="setCategory">
                            <label htmlFor="categorySelect">Categoria</label>
                            <select id="categorySelect" onChange={handleCategory} value={category}>
                                <option value='todos'>Todos</option>
                                {renderOptions(categories)}
                            </select> 
                        </div>
                        <div className="searchAndCount">
                            <div className="listingCountSearchBar">
                                <button><BsSearch/></button>
                                <input type='text' placeholder="Pesquisar"
                                onChange={(e => setSearchTerm(e.target.value.toLocaleLowerCase()))}/>
                            </div>
                            <div className='listingCount'>
                                <div><b>{productsLength}</b>Produtos</div>
                            </div>
                        </div>
                    </div>
                </div>
                {!products && (
                    <div className="noProducts"><h1>Não há produtos disponiveis</h1></div>
                )}
                {products.filter(product => {
                    if(searchTerm === '') {
                        return product
                    } else if(product.productName.toLowerCase().includes(searchTerm)) {
                        return product
                    }
                }).map((item, index) =>
                    
                         <Link className="box" to={`/produto/${item._id}`} key={index}>
                              <img src={`${item.photos[0]}`} alt={item.productName} className="imgProduto"></img>
                             <div className="titleWrapper">
                                 <p>{item.productName}</p>
                             </div>
                             <div className="starsWrapper">
                                 <p>☆☆☆☆☆</p>
                             </div>
                             <div className="priceWrapper">
                                 <p>{item.price}</p>
                             </div>
                        </Link>
                    )}
            </div>
        </main>
        </> : <NotLoad/>
    )
}

export default Main
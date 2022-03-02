import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import AuthBtn from "./AuthBtn";
import { BsFillCartFill } from "react-icons/bs";

function Header() {
    const auth = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart)

    return (
        <header>
            <input type="checkbox" className="nav-toggle" id="nav-toggle"/>
            <nav>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    {auth && (<li><Link to='admin/add' className="link">Adicionar produtos</Link></li>)}
                    {auth && (<li><Link to='add-category' className="link">Adicionar categorias</Link></li>)}
                    {auth && (<li><Link to='deletar' className="link">Deletar produtos</Link></li>)}
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
            <AuthBtn/>
            <Link to="/carrinho" className="cartLink">
                <BsFillCartFill color="white" size="1.8em" />
                <div className="cartCountWrapper">
                    <span className="cartCount">{cart.length}</span>
                </div>
            </Link>
        </header>
    )
}

export default Header
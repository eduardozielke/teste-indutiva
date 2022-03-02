import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {loginAction, logoutAction} from '../actions/authActions'

function AuthBtn() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (auth ? 
        <button onClick={()=>{dispatch(logoutAction())}} className="authBtn btn btn-sm btn-success">Admin</button> :
        <button onClick={()=>{dispatch(loginAction())}} className="authBtn btn btn-sm btn-dark">Não admin</button>
    )
}

export default AuthBtn;

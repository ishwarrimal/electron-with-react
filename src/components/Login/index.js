import React, { useContext } from 'react'
import { LoginContext } from '../../context'

export function Login(){
    const [loginContext, updateLoginContext] = useContext(LoginContext)
    const buttonClickHandler = e => {
        const curVal = e.currentTarget.innerText
        const isAuthenticated =  curVal === 'login' ? true : false
        const newLoginVal = {...loginContext}
        newLoginVal.isAuthenticated = isAuthenticated
        updateLoginContext(newLoginVal)
    }
    return (
    <button style={loginContext.isAuthenticated ? {color:'red'} : {color:'green'}} onClick={(e) => buttonClickHandler(e)}>{loginContext.isAuthenticated ? "logout" : "login"}</button>
    )
}
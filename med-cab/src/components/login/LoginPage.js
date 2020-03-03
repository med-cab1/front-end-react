import React from 'react'
import LoginForm from './LoginForm'


const LoginPage = props => {
    console.log(props.error)
    return(
        <>
            <h1>Log-In</h1>
            <div>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage
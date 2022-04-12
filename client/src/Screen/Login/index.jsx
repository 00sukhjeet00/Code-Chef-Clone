import React, { useState } from 'react'
import LoginComponent from './component/Login'

export default function LoginScreen() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  return (
    <LoginComponent 
    email={email}
    password={password}
    />
  )
}

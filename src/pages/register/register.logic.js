import { useState } from 'react';

export const useRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    // TODO
    console.log(email, password)
  }
  
  return {
    email, 
    password, 
    setEmail, 
    setPassword, 
    onRegister
  }
}
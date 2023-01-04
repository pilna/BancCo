import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    // TODO
    console.log(email, password);
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    onLogin
  }
}
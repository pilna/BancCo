import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return {
    email,
    setEmail,
    error,
    setError,
    password,
    setPassword
  }
}
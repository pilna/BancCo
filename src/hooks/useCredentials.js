import { useRef } from "react"

export const useCredentials = () => {
  const credentials = useRef({});

  const setCredentials = (username, password) => {
    credentials.current = {
      username: username,
      password: password
    }
  }

  return {
    credentials,
    setCredentials
  }
}
